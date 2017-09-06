import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrderdetailserviceProvider } from "./order-detail.service";
import { OrderDetailModel } from "./order-detail.model";

/**
 * Generated class for the OrderDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-order-detail',
  templateUrl: 'order-detail.html',
})
export class OrderDetailPage {
  orderdetailData: OrderDetailModel = new OrderDetailModel;

  constructor(public navCtrl: NavController, public navParams: NavParams, public orderdetailserviceProvider: OrderdetailserviceProvider) {
  this.orderdetailData = navParams.get('items');
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderDetailPage');
    // this.orderdetailserviceProvider.getData().then(data => {
    //   this.orderdetailData = data;
    //   console.log(data);
    // })
  }

}
