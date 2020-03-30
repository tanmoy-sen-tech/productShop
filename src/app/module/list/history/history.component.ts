import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlConfig } from 'src/app/service/url-config';
import { Service } from 'src/app/service/service';
import { NotificationService } from 'src/app/service/notification-service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  spinner = false;
  router: string;
  products: any;
  review: string;
  rating: number;
  constructor(private routerString: Router, private url: UrlConfig, public api: Service,
              private notificationService: NotificationService) {
          this.router = routerString.url || '';
    }

  ngOnInit() {
    this.getHistory();
    this.notificationService.sendRoute(this.router);
  }
  public modalAction(action: string): void {
    if (action === 'Ok') {
      this.spinner = false;
      this.api.alertConfigDefaultValue();
    } else {
      this.spinner = false;
      this.api.alertConfigDefaultValue();
    }
  }
  submitReview(product) {
    console.log(product);
    if (this.review !== undefined || this.rating === 0) {
      const postObject = {
        userId: 1,
      purchasedProductId: product.productId,
      review: this.review,
      rating: this.rating
      };
      console.log(postObject);
      this.spinner = true;
       /*api call*/
      this.api.postCall(this.url.urlConfig().reviewProduct, postObject, 'post').subscribe(data => {
      if (data.statusCode === 607 ) {
        this.spinner = false;
        this.api.alertConfig = this.api.modalConfig('Error', 'rating Submiited', true, [{ name: 'Ok' }]);
      } else {
         this.api.alertConfig = this.api.modalConfig('Error', 'error', true, [{ name: 'Ok' }]);
         this.spinner = false;
      }
    },
      error => {
        this.spinner = false;
      });
    } else {
    alert('please provide review or rating');
      }
    }
/*mock*/
getHistory() {
  this.api.getList(this.url.urlConfig().mockPurchased).subscribe(data => {
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
