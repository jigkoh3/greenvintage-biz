import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileServiceProvider } from '../profile/profile.service';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  private shop: any = {};
  private profile: any;
  private tel: string;
  private email: string;
  private actionEdit: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public profileServiceProvider: ProfileServiceProvider) {

  }

  ionViewDidLoad() {
    this.getShop();
  }

  editProfile(){
    this.actionEdit = true;
  }

  saveProfile(){
    this.actionEdit = false;
  }

  getShop() {
    this.shop = this.profileServiceProvider.getProfile().shop;
    this.tel = this.shop.tel ? this.shop.tel : '0961345046';
    this.email = this.shop.email ? this.shop.email : 'apple@gmail.com';
    console.log(this.shop);
  }
}
