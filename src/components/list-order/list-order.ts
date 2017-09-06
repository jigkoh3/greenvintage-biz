import { Component, Input } from '@angular/core';
import { IonOrdersComponent } from "../ion-orders/ion-orders";
import { OrderDetailPage } from "../../pages/order-detail/order-detail";
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  @Input() items: any;
  @Input() status: string;

  constructor(public navCtrl: NavController) {
    console.log('Hello ListOrderComponent Component');
  }
  selectOrder() {
    this.navCtrl.push(OrderDetailPage);
  }
}
