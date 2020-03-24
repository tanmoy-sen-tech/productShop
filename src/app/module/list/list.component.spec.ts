import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { ProductsComponent } from './products/products.component';
import { Router } from '@angular/router';
import { Service } from 'src/app/service/service';
import { UrlConfig } from 'src/app/service/url-config';
import { CommonModule } from '@angular/common';
import { ListRoutingModule } from './list-routing.module';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationService } from 'src/app/service/notification-service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs/internal/observable/of';
import { url } from 'inspector';
import { PrimeModule } from 'src/app/shared/primeng-module';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
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


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent,ProductsComponent],
      imports: [SharedModuleModule, PrimeModule, HttpClientTestingModule],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: Service, useValue: MockUserService },
        UrlConfig, NotificationService]
    })
      .compileComponents();
    mockRouter = TestBed.get(Router);
    api = TestBed.get(Service);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
});
