import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileModel } from '../profile/profile.model';
import { ProfileServiceProvider } from '../profile/profile.service';
/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  profile: ProfileModel = new ProfileModel();
  constructor(public navCtrl: NavController, public navParams: NavParams, public profileServiceProvider: ProfileServiceProvider) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.getShop();
  }

  getShop() {
    this.profileServiceProvider.getProfile().then((data) => {
      console.log(data);
      this.profile = data;
    }, (error) => {
      console.error(error);
    });
  }
}
