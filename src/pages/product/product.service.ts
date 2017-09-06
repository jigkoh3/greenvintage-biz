import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { ProductModel } from "./product.model";

/*
  Generated class for the ProductserviceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ProductserviceProvider {

  constructor(public http: Http) {
    console.log('Hello ProductserviceProvider Provider');
  }
  getData(): Promise <ProductModel>{
    return this.http.get('./assets/example_data/productlist.json')
    .toPromise()
    .then( resp => resp.json() as ProductModel)
    .catch(err => Promise.reject(err.message || err));
  }

}
