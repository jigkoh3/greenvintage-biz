import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { OrderPage } from '../order/order';
import { ProductPage } from '../product/product';
import { NotificationPage } from '../notification/notification';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the TabsNavigationPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */
@Component({
  selector: 'page-tabs-navigation',
  templateUrl: 'tabs-navigation.html'
})
@IonicPage()
export class TabsNavigationPage {

  homeRoot = HomePage
  orderRoot = OrderPage
  productRoot = ProductPage
  notificationRoot = NotificationPage
  profileRoot = ProfilePage


  constructor(public navCtrl: NavController) {}

}
