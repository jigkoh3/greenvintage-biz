import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateProductPage } from './create-product';

@NgModule({
  declarations: [
    CreateProductPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateProductPage),
  ],
  exports: [
    CreateProductPage
  ]
})
export class CreateProductPageModule {}
