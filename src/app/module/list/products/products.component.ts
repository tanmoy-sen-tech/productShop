import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlConfig } from 'src/app/service/url-config';
import { Product } from 'src/app/model/model';
import { Service } from 'src/app/service/service';
import { NotificationService } from 'src/app/service/notification-service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  spinner = false;
  router: string;
  usertype: string;
  products: Product[];
  userDetail: any;
  postObject: any;
  searchstring: string;
  sysDate = new Date();
  constructor(private routerString: Router, private url: UrlConfig, public api: Service,
              private notificationService: NotificationService) {
          this.router = routerString.url || '';
    }

  ngOnInit() {
    this.userDetail = JSON.parse(sessionStorage.getItem('currentUser'));
    if (history.state) {
      this.usertype = history.state.data;
      console.log(this.usertype);
      this.getProducts();
      console.log(this.searchstring);
      } else {
        this.routerString.navigate(['/']);
      }
    this.notificationService.sendRoute( this.router );
  }
    /* Modal Action
  @param Ok modal has been closed
 */
public modalAction(action: string): void {
  if (action === 'Ok') {
    this.spinner = false;
    this.api.alertConfigDefaultValue();
  } else {
    this.spinner = false;
    this.api.alertConfigDefaultValue();
    this.routerString.navigate(['/member/login']);

  }
}
buyNow(productItem) {
console.log(productItem);
// productName: "pqr"
// productId: 321
// price: 2800
// quantity: 6
// reviews: 2
const buyPostObject = {
  userId: 1,
  productId: productItem.productId,
  quantity: 1,
  purchaseDate: String(this.sysDate)
};
console.log(buyPostObject);
   /*api call*/
this.api.postCall(this.url.urlConfig().buyProduct, buyPostObject, 'post').subscribe(buyProductdata => {
      if (buyProductdata.statusCode === 607) {
        this.api.alertConfig = this.api.modalConfig('Error', '${buyProductdata.message}', true, [{ name: 'Ok' }]);
      } else {
        this.api.alertConfig = this.api.modalConfig('Error', '${buyProductdata.message}', true, [{ name: 'Ok' }]);
      }
    },
      error => {

        this.spinner = false;
      });
 }
   searchProduct() {
  if (this.searchstring !== undefined) {
    this.spinner = true;
    const postSearchObj = {
      productName: this.searchstring
       };
    console.log(postSearchObj);
    this.api.postCall(this.url.urlConfig().searchProduct, postSearchObj, 'post').subscribe(productdata => {
      if (productdata) {
        this.products = productdata;
        this.spinner = false;
      } else {
         this.api.alertConfig = this.api.modalConfig('Error', 'no product', true, [{ name: 'Ok' }]);
         this.spinner = false;
      }
    },
      error => {
        this.spinner = false;
      });
  } else {
alert('nothing to search');
  }
}
  /*get products*/
  private getProducts() {
if ( this.userDetail !== null) {
  const postObj = {
    typeId: this.usertype,
    emailId: this.userDetail.emailId
     };
  this.postObject = postObj;
} else {
   this.api.alertConfig = this.api.modalConfig('Error', 'User information not available' , true, [{ name: 'Ok' }]);
}

   /*api call*/
// this.api.postCall(this.url.urlConfig().product, this.postObject, 'post').subscribe(productdata => {
//       if (productdata) {
//         this.products = productdata;
//         this.spinner = false;
//       } else {
//         // this.api.alertConfig = this.api.modalConfig('Error', 'Username/Password is not valid', true, [{ name: 'Ok' }]);
//         this.spinner = false;
//       }
//     },
//       error => {
//         this.spinner = false;
//       });
/*mock*/
this.api.getList(this.url.urlConfig().product).subscribe(data => {
  console.log(data);
  if (data) {
            this.products = data;
            this.spinner = false;
          } else {
            // this.api.alertConfig = this.api.modalConfig('Error', 'Username/Password is not valid', true, [{ name: 'Ok' }]);
            this.spinner = false;
            console.log('false');
          }
       });
}
  }


