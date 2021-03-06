import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { ProductDetailModel } from '../product-detail/product-detail.model';

import { Constants } from "../../app/app.contants";
/*
  Generated class for the ProductDetailServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ProductDetailServiceProvider {

  constructor(public http: Http) {
   console.log('Hello ProductDetailServiceProvider Provider');
  }
  // getProductDetail(id): Promise<ProductDetailModel> {
  //   return this.http.get(Constants.URL + '/api/productmasters/' + id)
  //     .toPromise()
  //     .then(response => response.json() as ProductDetailModel)
  //     .catch(this.handleError);
  // }
  getProductDetail(id): Promise<ProductDetailModel> {
    // return this.http.get('./assets/example_data/productdetail.json')
    return this.http.get('http://localhost:3000/api/products/' + id)
      .toPromise()
      .then(response => response.json() as ProductDetailModel)
      .catch(this.handleError);
  }

  postProductReview(id, review): Promise<ProductDetailModel> {
    // return this.http.get('./assets/example_data/productdetail.json')
    return this.http.post('http://localhost:3000/api/products/review/' + id, review)
      .toPromise()
      .then(response => response.json() as ProductDetailModel)
      .catch(this.handleError);
  }

  addToCart(product): Promise<ProductDetailModel> {
    product.selecteduser = JSON.parse(window.localStorage.getItem('e7e_jjecommerce_buy_user'));
    return this.http.post(Constants.URL + '/api/carts/add', product)
      .toPromise()
      .then(response => response.json() as ProductDetailModel)
      .catch(this.handleError);
  }



  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
