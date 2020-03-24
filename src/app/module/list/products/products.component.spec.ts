import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';
import { Router } from '@angular/router';
import { Service } from 'src/app/service/service';
import { UrlConfig } from 'src/app/service/url-config';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PrimeModule } from 'src/app/shared/primeng-module';
import { NotificationService } from 'src/app/service/notification-service';
import { of } from 'rxjs/internal/observable/of';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let api: Service;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };
  const MockUserService = {
    getList(url: string) {
      // tslint:disable-next-line: no-unused-expression
      return of(
        [
          { id: 4,
          imageurl: '../../../../assets/lo1.jpg',
          categoryName: 'ladiesoutwear',
          itemname: 'Ladies Modern Stretch Full Zip',
          price: 2790,
          detail: [{
            size: 's',
            quantity: 4
          }, {
            size: 'm',
            quantity: 1
          },
        ]
      }
        ]
      );
    }
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsComponent ],
      imports: [SharedModuleModule, HttpClientTestingModule, PrimeModule],
       providers: [
        { provide: Router, useValue: mockRouter },
        { provide: Service, useValue: MockUserService }, NotificationService,
        UrlConfig]
    })
    .compileComponents();
    mockRouter = TestBed.get(Router);
    api = TestBed.get(Service);



  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
