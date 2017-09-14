import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Constants } from "../../app/app.contants";
import { Shipping, Category } from "../../app/app.model";
/*
  Generated class for the ProductDetailServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ProductFormServiceProvider {

  constructor(public http: Http) {
    console.log('Hello ProductDetailServiceProvider Provider');
  }
  // getProductDetail(id): Promise<ProductDetailModel> {
  //   return this.http.get(Constants.URL + '/api/productmasters/' + id)
  //     .toPromise()
  //     .then(response => response.json() as ProductDetailModel)
  //     .catch(this.handleError);
  // }
  getShippings(): Promise<Array<Shipping>> {
    // return this.http.get('./assets/example_data/productdetail.json')
    return this.http.get('http://localhost:3000/api/shippings/')
      .toPromise()
      .then(response => response.json() as Array<Shipping>)
      .catch(this.handleError);
  }

  getCategories(): Promise<Array<Category>> {
    // return this.http.get('./assets/example_data/productdetail.json')
    return this.http.get('http://localhost:3000/api/categories/')
      .toPromise()
      .then(response => response.json() as Array<Category>)
      .catch(this.handleError);
  }

  
  private handleError(error: any): Promise<any> {
   console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
