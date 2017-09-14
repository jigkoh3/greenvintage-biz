import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { ProductDetailModel } from '../product-detail/product-detail.model';
import { ProductDetailServiceProvider } from '../product-detail/product-detail.service';
import { CartPage } from '../cart/cart';
import { SocialSharing } from "@ionic-native/social-sharing";
import { ShopDetailPage } from "../shop-detail/shop-detail";
import { CartService } from "../cart/cart.service";
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
  productdetailData: ProductDetailModel = new ProductDetailModel;

  isLiked: boolean;
  nameOfLike: string;

  constructor(
    private socialSharing: SocialSharing,
    public navCtrl: NavController,
    public navParams: NavParams,
    public productDetailService: ProductDetailServiceProvider,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public cartService: CartService
  ) {
    this.product = navParams.get('data') || { _id: 'test' };

    this.isLiked = false;
    this.nameOfLike = this.isLiked ? 'ios-heart' : 'ios-heart-outline';
    //console.log(this.product);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailPage');
    this.getProductdetailData();
  }

  getProductdetailData() {
    let loadingCtrl = this.loadingCtrl.create();
    loadingCtrl.present();
    this.productDetailService.getProductDetail(this.product._id).then((data) => {
      loadingCtrl.dismiss();
      this.productdetailData = data;
      // this.reviewSummary(this.productdetailData.reviews);
      console.log(this.productdetailData);
    }, (err) => {
      loadingCtrl.dismiss();
      console.error(err);
    });
  }



  // addToCart(product) {
  //   this.authorizeProvider.isAuthorization();
  //   let loadingCtrl = this.loadingCtrl.create();
  //   let user = this.authorizeProvider.getAuthorization()
  //   if (user) {
  //     loadingCtrl.present();
  //     this.cartService.cookingLocalCart(product);
  //     loadingCtrl.dismiss();      
  //   }
  // }

  socialShare() {
    this.socialSharing.share('ทดสอบการแชร์จากแอป', 'แชร์ๆๆๆ', null, 'https://assets.wired.com/photos/w_1534/wp-content/uploads/2016/09/ff_nike-hyperadapt_angle_front.jpg').then(data => {
      alert('share success');
    }).catch(err => {
      alert(err);
    });
  }

  liked() {
    this.isLiked = !this.isLiked;
    this.nameOfLike = this.isLiked ? 'ios-heart' : 'ios-heart-outline';
    //alert(this.isLiked);
  }

  // writeReview() {
  //   let modal = this.modalCtrl.create(WriteReviewPage, { data: this.product }, );
  //   // Getting data from the modal:
  //   modal.onDidDismiss(data => {
  //     this.productDetailService.postProductReview(this.product._id, data).then((resp) => {
  //       this.getProductdetailData();
  //     }, (error) => {
  //       console.error(error);
  //     });

  //   });
  //   modal.present();
  // }

  goToShop() {
    this.navCtrl.push(ShopDetailPage, { data: this.productdetailData.shop });
  }

  gotoOtherProduct(e) {
    this.navCtrl.push(ProductDetailPage, { data: e });
  }

}
