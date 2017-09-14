import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';

import { AuthorizeModel } from "./register.model";
import { RegisterServiceProvider } from "./register.service";
import { TabsNavigationPage } from "../tabs-navigation/tabs-navigation";
import { HomePage } from '../home/home';

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  @ViewChild(Slides) slides: Slides;
  signup: FormGroup;
  private shop: any = {};
  userInfo: AuthorizeModel = new AuthorizeModel();
  constructor(public navCtrl: NavController, public navParams: NavParams, public regisService: RegisterServiceProvider) {
    this.signup = new FormGroup({
      username: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      tel: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirm_password: new FormControl('', Validators.required)
    });
  }

  ionViewDidLoad() {
    // this.slides.lockSwipeToNext(true);
    // this.slides.lockSwipeToPrev(true);
  }

  // goToNextStep2() {
  //   this.slides.lockSwipeToNext(false);
  //   this.slides.slideNext();
  //   this.slides.lockSwipeToNext(true);
  // }

  doSignup() {
    this.userInfo = this.signup.value;
    // this.userInfo.shop = this.shop;
    this.regisService.newAuthorization(this.userInfo).then((data) => {
      this.navCtrl.setRoot(TabsNavigationPage, { data: data });
    }, (error) => {
      console.error(error);
    });
  }

}
