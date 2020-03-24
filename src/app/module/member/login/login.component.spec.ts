import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { Service } from 'src/app/service/service';
import { FormBuilder } from '@angular/forms';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';
import { PrimeModule } from 'src/app/shared/primeng-module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { UrlConfig } from 'src/app/service/url-config';

describe('LoginComponent', () => {

    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let api: Service;
    let mockRouter = {
      navigate: jasmine.createSpy('navigate')
    };
    /* create mock data for testing */
    const MockUserService = {
      modalConfig: () => ({
        header: '',
        message: '',
        modalShow: '',
        button: []
      }),
      alertConfigDefaultValue: () => ({
        header: '',
        message: '',
        modalShow: '',
        button: []
      }),
    };
    // create new instance of FormBuilder
    const formBuilder: FormBuilder = new FormBuilder();
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [LoginComponent],
        imports: [SharedModuleModule, PrimeModule, HttpClientTestingModule],
        providers: [
          { provide: Router, useValue: mockRouter },
          { provide: FormBuilder, useValue: formBuilder },
          { provide: Service, useValue: MockUserService },
          UrlConfig]
      })
        .compileComponents();
      mockRouter = TestBed.get(Router);
      api = TestBed.get(Service);
    }));
  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
