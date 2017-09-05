// export class HomeModel {
//     images: Array<String>;
//     popularproducts: Array<ProductItemModel>;
//     popularshops: Array<ShopItemModel>;
//   }

//   export class ProductItemModel {
//     name: String;
//     image: String;
//     unitprice: Number;
//   }
//   export class ShopItemModel {
//     name: String;
//     image: String;
//   }


export class HomeModel {
  waiting: Array<HomeItemModel>;
  accept: Array<HomeItemModel>;
  unreceive: Array<HomeItemModel>;
}

export class HomeItemModel {
  docno: String;
  name: String;
  image: String;
  price: Number;
  normalprice: Number;
  discount: Number;
  discounttype: String;
  currency: String;
  qty: Number;
  status: String;
  description: string;
}