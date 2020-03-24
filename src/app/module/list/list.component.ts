import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlConfig } from 'src/app/service/url-config';
import { Service } from 'src/app/service/service';
import { NotificationService } from 'src/app/service/notification-service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
routerpath: string;
  constructor(public router: Router, private url: UrlConfig,public api: Service,
              private notificationService: NotificationService) {
      this.routerpath = router.url;
    }

  ngOnInit() {
  }

  }



