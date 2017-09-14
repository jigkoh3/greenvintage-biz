import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { OrderPage } from '../order/order';
import { ProductPage } from '../product/product';
import { NotificationPage } from '../notification/notification';
import { ProfilePage } from '../profile/profile';
import { ShopFormPage } from "../shop-form/shop-form";
import { ShopModel } from "../shop-form/shop-form.model";
import { ShopFormServiceProvider } from '../shop-form/shop-form.service';
import { AuthorizeModel } from "../register/register.model";

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
  shop: ShopModel = new ShopModel();
  user: AuthorizeModel = new AuthorizeModel();

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public listShopService: ShopFormServiceProvider, public navParams: NavParams) {

    this.user = navParams.get('data');

    if (!this.shop.name) {
      console.log(this.user);
      
      let modal = this.modalCtrl.create(ShopFormPage);
      // Getting data from the modal:
      modal.onDidDismiss(data => {
        data.user = this.user;
        // console.log('MODAL DATA', data);
        this.listShopService.addShop(data)
          .then((resp) => {
            console.log(resp);
            // this.getListShopData();
          }, (err) => {
            console.log(err);
          });
      });
      modal.present();
    }
  }

}
