import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductDetailServiceProvider } from '../product-detail/product-detail.service';
import { CartPage } from '../cart/cart';
import { SocialSharing } from "@ionic-native/social-sharing";
import { ProductItemModel } from "../../app/app.model";

/**
 * Generated class for the ProductDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {
  product: any;
  productdetailData: ProductItemModel = new ProductItemModel;
  constructor(private socialSharing: SocialSharing, public navCtrl: NavController, public navParams: NavParams, public productDetailService: ProductDetailServiceProvider) {
    this.product = navParams.get('title');
    this.productdetailData = navParams.get('product');
    console.log(this.productdetailData);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailPage');
    // this.getProductdetailData();
  }
  // getProductdetailData() {
  //   this.productDetailService
  //     .getProductDetail()
  //     .then((data) => {
  //       this.productdetailData = data;
  //       console.log(this.productdetailData);
  //     }, (err) => {
  //       console.log(err);
  //     });
  // }
  addToCart() {
    alert('thank you');
    this.navCtrl.push(CartPage);
  }

  socialShare() {
    this.socialSharing.share('ทดสอบการแชร์จากแอป', 'แชร์ๆๆๆ', null, 'https://assets.wired.com/photos/w_1534/wp-content/uploads/2016/09/ff_nike-hyperadapt_angle_front.jpg').then(data => {
      alert('share success');
    }).catch(err => {
      alert(err);
    });
  }

}
