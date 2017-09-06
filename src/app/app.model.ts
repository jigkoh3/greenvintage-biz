export class ProductItemModel {
  name: string;
  detail: string;
  image: Array<image>;
  price: number;
  preparedays: number;
  issize: number;
  sellerSummary: number;
  shop: ShopModel = new ShopModel();
}

export class image {
  url: string
}

export class ShopModel {
  name: string;
  detail: string;
  email: string;
  tel: string;
  image: string;
  map: map = new map();
}
export class map {
  lat: string;
  lng: string;
}

export class size {
  detail: string;
  sizedetail: Array<sizedetail>;
}

export class sizedetail {
  name: string;
}