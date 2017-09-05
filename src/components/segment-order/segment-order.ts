import { Component } from '@angular/core';
import { IonOrdersComponent } from "../ion-orders/ion-orders";

/**
 * Generated class for the SegmentOrderComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'segment-order',
  templateUrl: 'segment-order.html'
})
export class SegmentOrderComponent {

  text: string;

  constructor(public parent: IonOrdersComponent) {
    console.log('Hello SegmentOrderComponent Component');
    this.text = 'Hello World';
  }

}
