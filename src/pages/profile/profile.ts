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
  private edittel: boolean = false;
  private editemail: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public profileServiceProvider: ProfileServiceProvider) {

  }


  ionViewDidLoad() {
    this.getShop();
  }

  getShop() {
    this.shop = this.profileServiceProvider.getProfile().shop;
    console.log(this.shop);
  }

  editTel() {
    this.tel = this.shop.tel ? this.shop.tel : '';
    this.edittel = true;
  }

  saveTel(){
    alert('save');
    this.edittel = false;
  }

  editEmail() {
    this.email = this.shop.email ? this.shop.email : '';
    this.editemail = true;
  }

  saveEmail(){
    alert('save');
    this.editemail = false;
  }
}
