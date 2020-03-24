import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlConfig } from 'src/app/service/url-config';
import { Product } from 'src/app/model/model';
import { Service } from 'src/app/service/service';

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
  constructor(private routerString: Router, private url: UrlConfig, public api: Service) {
          this.router = routerString.url || '';
    }

  ngOnInit() {
    if (history.state) {
      this.usertype = history.state.data;
      console.log(this.usertype);
      this.getProducts();
      } else {
        this.routerString.navigate(['/']);
      }

  }
  private getProducts() {

 const postObject = {
typeId: this.usertype
 };
 this.api.postCall(this.url.urlConfig().product, postObject, 'post').subscribe(productdata => {
      if (productdata) {
        this.products = productdata;
        this.spinner = false;
      } else {
        // this.api.alertConfig = this.api.modalConfig('Error', 'Username/Password is not valid', true, [{ name: 'Ok' }]);
        this.spinner = false;
      }
    },
      error => {
        this.spinner = false;
      });
/*mock*/
//  this.api.getList(this.url.urlConfig().product).subscribe(data => {
//   console.log(data);
//   if (data) {
//             this.products = data;
//             this.spinner = false;
//           } else {
//             // this.api.alertConfig = this.api.modalConfig('Error', 'Username/Password is not valid', true, [{ name: 'Ok' }]);
//             this.spinner = false;
//             console.log('false');
//           }
//        });
}
  }


