import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { HomeModel } from "./home.model";



@Injectable()
export class HomeService {
  constructor(public http: Http) {}

  getData() {
    return this.http.get('./assets/example_data/order.json')
     .toPromise()
     .then(response => response.json())
     .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
