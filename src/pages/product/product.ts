import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductserviceProvider } from "./product.service";
import { ProductModel } from "../product/product.model";
import { ProductDetailPage } from "../product-detail/product-detail";
import { CreateProductPage } from "../create-product/create-product";

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
  productlistData: ProductModel = new ProductModel;


  constructor(public navCtrl: NavController, public navParams: NavParams, public productserviceProvider: ProductserviceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
    this.productserviceProvider.getData().then(data => {
      this.productlistData = data;
      console.log(data);
    })
  }
  selectedItem(){
    this.navCtrl.push(ProductDetailPage);
  }

  createProduct(){
    this.navCtrl.push(CreateProductPage);
    
  }
}
