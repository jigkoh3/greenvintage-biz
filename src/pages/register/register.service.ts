import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { AuthorizeModel } from "./register.model";

/*
  Generated class for the RegisterServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class RegisterServiceProvider {

  constructor(public http: Http) {
    console.log('Hello RegisterServiceProvider Provider');
  }

  // newAuthorization(data): Promise<AuthorizeModel> { // signup
  //   return this.http.post('http://localhost:3000/api/auth/signup', data)
  //     .toPromise()
  //     .then(response => {
  //       let user = response.json() as AuthorizeModel;
  //       window.localStorage.setItem('user', JSON.stringify(user));
  //       return user;
  //     })
  //     .catch(this.handleError);
  // }

  newAuthorization(user): Promise<AuthorizeModel> { // signup
    // return this.http.post(Constants.URL + '/api/auth/signup', user)
    return this.http.post('http://localhost:3000/api/auth/signup', user)
      .toPromise()
      .then(response => {
        let data = response.json() as AuthorizeModel;
        window.localStorage.setItem('user', JSON.stringify(data));
        return data;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
