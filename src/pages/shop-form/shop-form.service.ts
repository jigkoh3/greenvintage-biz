import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ShopModel } from './shop-form.model';

/*
  Generated class for the ShopFormServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ShopFormServiceProvider {

  constructor(public http: Http) {
    console.log('Hello ShopFormServiceProvider Provider');
  }
  addShop(shop): Promise<ShopModel> {
    //return this.http.get(Constants.URL + '/api/shopmasters')
    return this.http.post('http://localhost:3000/api/shops', shop)
      .toPromise()
      .then(response => shop as ShopModel)
      .catch(this.handleError);
  }
  // uploadImage(imgs): Promise<ShopModel> {
  //   //return this.http.get(Constants.URL + '/api/shopmasters')
  //   return this.http.post('http://localhost:3000/api/shops', imgs)
  //     .toPromise()
  //     .then(response => imgs as ShopModel)
  //     .catch(this.handleError);
  // }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
