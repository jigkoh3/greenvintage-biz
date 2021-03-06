import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotificationServiceProvider } from "./notification.service";
import { NotificationModel } from "./notification.model";
import { ProductDetailPage } from '../product-detail/product-detail';
/**
 * Generated class for the NotificationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {
  notification: NotificationModel = new NotificationModel();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public notificationServiceProvider: NotificationServiceProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPage');
    this.getData();
  }
  getData() {
    this.notificationServiceProvider.getNotification().then(data => {
      this.notification = data;
    })
  }
  selectedItem() {
    this.navCtrl.push(ProductDetailPage);
  }
}
