import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileServiceProvider {

  constructor(public http: Http) {

  }

  getUser() {
    return window.localStorage.getItem('user');
  }

}
