import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello FormProductComponent Component');
    this.text = 'Hello World';
  }

}
