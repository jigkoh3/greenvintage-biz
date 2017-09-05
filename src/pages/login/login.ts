import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { RegisterPage } from "../register/register";
import { credentialModel } from "./login.model";
import { LoginServiceProvider } from "./login.service";
import { TabsNavigationPage } from "../tabs-navigation/tabs-navigation";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  login: FormGroup;
  credential: credentialModel = new credentialModel();
  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, public loginServiceProvider: LoginServiceProvider) {
    this.login = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ionViewDidLoad() {

  }

  doLogin() {
    this.credential = this.login.value;
    this.loginServiceProvider.onAuthorization(this.credential).then((data) => {
      this.navCtrl.setRoot(TabsNavigationPage);
    }, (error) => {
      console.error(error);
    });
  }

  goToSignup() {
    this.navCtrl.push(RegisterPage);
  }

}
