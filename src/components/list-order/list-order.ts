import { Component, Input } from '@angular/core';
import { IonOrdersComponent } from "../ion-orders/ion-orders";

/**
 * Generated class for the ListOrderComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'list-order',
  templateUrl: 'list-order.html'
})
export class ListOrderComponent {

  text: string;

  constructor() {
    console.log('Hello ListOrderComponent Component');
    this.text = 'Hello World';
  }

}
