import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { OrderModel } from "./order.model";

/*
  Generated class for the OrderServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class OrderServiceProvider {

  constructor(public http: Http) {
    console.log('Hello OrderServiceProvider Provider');
  }

  getData(): Promise <OrderModel>{
    return this.http.get('../../assets/example_data/order.json')
    .toPromise()
    .then( resp => resp.json() as OrderModel)
    .catch(err => Promise.reject(err.message || err));
  }

}
