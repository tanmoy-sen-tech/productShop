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
             product: this.apiMock + 'products',
             cartdata: this.apiMock + 'cart'
        };
    }
    /* url config with url Server list */
    urlApi() {
        return this.url = {
            userLogin: this.apiHost + 'login',
            userRegister: this.apiHost + 'register',
            mockLogin: this.apiHost + 'mockLogin',
            mockRegister: this.apiHost + 'mockRegister',
            product: this.apiHost + 'products',
            cartdata: this.apiHost + 'cart'
        };
    }

     /* return url */
    urlConfig() {
        return  this.serverConfig ? this.urlApi() : this.urlMock() ;
    }
}
