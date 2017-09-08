import { Component, Input, Output, EventEmitter } from '@angular/core';


/**
 * Generated class for the FormProductComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'form-product',
  templateUrl: 'form-product.html'
})
export class FormProductComponent {
  @Input() dataSize: Array<any>;
  @Input() dataCate: Array<any>;
  @Input() dataShipping: Array<any>;
  @Input() dataShop: Array<any>;

  @Output() ProductForm: EventEmitter<any> = new EventEmitter<any>();
  shipping: any = {};
  // image: string;
  public product: any = {
    shippings: []
  };

  constructor() {
    console.log('Hello FormProductComponent Component');
  }
  selectShipping(data) {
    this.product.shippings.push({
      shipping: data
    })
    console.log(this.product);
  }
  createProducts() {
    // this.product.image = [];
    // this.product.image.push({ url: this.image });
    this.ProductForm.emit(this.product);
    console.log(this.product);
    // alert(JSON.stringify(this.create.value));
  }
  uploadImage(e) {
    this.product.image = e;
    alert('test');
  }
}