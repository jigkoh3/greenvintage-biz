import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ProductserviceProvider } from '../product/product.service';
import { LogServiceProvider } from '../../providers/log-service/log-service';
import { ProductDetailPage } from "../product-detail/product-detail";
import { ProductItemModel } from "../../app/app.model";
import { ListProductViewModel } from "./product.model";
import { ProductFormPage } from "../product-form/product-form";
/**
 * Generated class for the ProductPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {
  // listProductData: Array<ProductItemModel>;
  listProductData: ListProductViewModel = new ListProductViewModel();
  constructor(public navCtrl: NavController, public navParams: NavParams, public listProductService: ProductserviceProvider, public modalCtrl: ModalController, public listProductServiceProvider: ProductserviceProvider
  ) {
  }

  ionViewDidLoad() {
   console.log('ionViewDidLoad ProductPage');
    // let view = this.navParams.get('view');
    // if (view === 'shop') {
    //   let data = this.navParams.get('data');
    //   this.getListProductByShop(data);
    // } else {
    //   this.getListProductByHome(view);
    // }
    this.getListProduct();
  }
  getListProduct() {
    this.listProductService.getProductList().then(data => {
      this.listProductData = data;
    }, (err) => {
      console.error(err);
    })
  }
  // getListProductByShop(data) {
  //   this.listProductService.getProductListByShop(data).then((data) => {
  //     this.listProductData = data;
  //   }, (err) => {
  //     this.log.error(err);
  //   });
  // }

  // getListProductByHome(view) {
  //   this.listProductService.getProductListByHome(view).then((data) => {
  //     this.listProductData = data;
  //   }, (err) => {
  //     this.log.error(err);
  //   });
  // }

  selectedItem(e) {
    this.navCtrl.push(ProductDetailPage, { data: e });
  }

  openModal() {
    let modal = this.modalCtrl.create(ProductFormPage);
    modal.onDidDismiss((data) => {
      console.log(data);
      this.listProductServiceProvider.postProduct(data.data).then((res) => {
        console.log('OK');
        this.getListProduct();
      }, (error) => {
        console.error(error);
      })
    })
    modal.present();
  }
}
