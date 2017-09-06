import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { ProductModel, SizeModel, CategoryModel, ShippingModel, ShopModel } from "./create-product.model";
/*
  Generated class for the CreateProductServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CreateProductServiceProvider {

  constructor(public http: Http) {
    console.log('Hello CreateProductServiceProvider Provider');
  }

  getCategory(): Promise<CategoryModel> {
    return this.http.get('https://greenvintage.herokuapp.com/api/categorymasters')
      .toPromise()
      .then(response => response.json() as CategoryModel)
      .catch(this.handleError);
  }

  getSize(): Promise<SizeModel> {
    return this.http.get('https://greenvintage.herokuapp.com/api/sizemasters')
      .toPromise()
      .then(response => response.json() as SizeModel)
      .catch(this.handleError);
  }

  getShipping(): Promise<ShippingModel> {
    return this.http.get('https://greenvintage.herokuapp.com/api/shippingmasters')
      .toPromise()
      .then(response => response.json() as ShippingModel)
      .catch(this.handleError);
  }

  getShop(): Promise<ShopModel> {
    return this.http.get('https://greenvintage.herokuapp.com/api/shopmasters')
      .toPromise()
      .then(response => response.json() as ShopModel)
      .catch(this.handleError);
  }

  newProduct(data) {
    return this.http.post('https://greenvintage.herokuapp.com/api/products', data)
      .toPromise()
      .then(response => {
        return response;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
