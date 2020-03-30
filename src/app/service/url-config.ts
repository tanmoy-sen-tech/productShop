import { Injectable } from '@angular/core';
@Injectable()
export class UrlConfig {
    serverConfig = false;
    private apiHost = 'http://10.117.189.111:9090/';
    private apiMock = 'http://localhost:3000/';
    url = {};

    /* url config with url Mock list */
    urlMock() {
        return this.url = {
             userLogin: this.apiMock + 'login',
             userRegister: this.apiMock + 'register',
             mockLogin: this.apiMock + 'mockLogin',
             mockRegister: this.apiMock + 'mockRegister',
             mockPurchased: this.apiMock + 'purchasedproducts',
             product: this.apiMock + 'products',
             cartdata: this.apiMock + 'cart',
             addProduct: this.apiMock + 'products',
             searchProduct: this.apiMock + 'products',
             buyProduct: this.apiMock + 'products',
             reviewProduct: this.apiMock + 'products'
        };
    }
    /* url config with url Server list */
    urlApi() {
        return this.url = {
            userLogin: this.apiHost + 'login',
            userRegister: this.apiHost + 'register',
            mockLogin: this.apiHost + 'mockLogin',
            mockRegister: this.apiHost + 'mockRegister',
            mockPurchased: this.apiHost + 'purchasedproducts',
            product: this.apiHost + 'products',
            addProduct: this.apiHost + 'products',
            searchProduct: this.apiHost + 'products',
            buyProduct: this.apiHost + 'products',
            reviewProduct: this.apiHost + 'products'
        };
    }

     /* return url */
    urlConfig() {
        return  this.serverConfig ? this.urlApi() : this.urlMock() ;
    }
}
