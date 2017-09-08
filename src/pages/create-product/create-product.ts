import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';

import { CreateProductServiceProvider } from "./create-product.service";
import { ProductModel, SizeModel, CategoryModel, ShippingModel, ShopModel } from "./create-product.model";
import { ProductPage } from '../product/product';

/**
 * Generated class for the CreateProductPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-create-product',
  templateUrl: 'create-product.html',
})
export class CreateProductPage {
  shopmaster: ShopModel = new ShopModel();
  shippingmaster: ShippingModel = new ShippingModel();
  categorymaster: CategoryModel = new CategoryModel();
  sizemaster: SizeModel = new SizeModel();
  // create: FormGroup;
  productData: ProductModel = new ProductModel();
  loading: any;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public createProduct: CreateProductServiceProvider,
    public loadingCtrl: LoadingController
  ) {
    this.loading = this.loadingCtrl.create();

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateProductPage');
    this.loading.present();
    this.getDataSize();
    this.getDataCategory();
    this.getDataShipping();
    this.getDataShop();
    this.loading.dismiss();
  }
  dataProductForm(e) {
    this.productData = e;
    console.log(this.productData);
  }
  createProducts() {
    this.createProduct.newProduct(this.productData).then((data) => {
      this.navCtrl.setRoot(ProductPage);
      console.log(data);
    }, (error) => {
      alert(error);
      console.error(error);
    });
  }

  getDataSize() {
    this.createProduct.getSize().then(data => {
      this.sizemaster = data;
      console.log(this.sizemaster);
    })
  }

  getDataCategory() {
    this.createProduct.getCategory().then(data => {
      this.categorymaster = data;
      console.log(this.categorymaster);
    })
  }

  getDataShipping() {
    this.createProduct.getShipping().then(data => {
      this.shippingmaster = data;
      console.log(this.shippingmaster);
    })
  }

  getDataShop() {
    this.createProduct.getShop().then(data => {
      this.shopmaster = data;
      console.log(this.shippingmaster);
    })
  }
}