import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProfileServiceProvider {

  constructor(public http: Http) {
    
  }

  getProfile() {
    return JSON.parse(window.localStorage.getItem('user'));
  }
}
