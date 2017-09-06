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


// export class HomeModel {
//   waiting: Array<HomeItemModel>;
//   accept: Array<HomeItemModel>;
//   unreceive: Array<HomeItemModel>;
// }

// export class HomeItemModel {
//   docno: String;
//   name: String;
//   image: String;
//   price: Number;
//   normalprice: Number;
//   discount: Number;
//   discounttype: String;
//   currency: String;
//   qty: Number;
//   status: String;
//   description: string;
// }

export class HomeModel {
  _id: string;
  created: string;
  status: string;
  shipping: Shipping = new Shipping();
  user: UserModel = new UserModel();
  items: Array<Items>;


}
export class Items {
  _id: string;
  delivery: Delivery = new Delivery();
  product: Product = new Product();
  amount: number;
  qty: number;
  size: string;
  status: string;
}
export class Product {
  _id: string;
  price: number;
  category: string;
  created: string;
  name: string;
  unitprice: number;
  sellerSummary: string;
  shop: ShopModel = new ShopModel();
  image: Array<Image>;
  delivery: Delivery = new Delivery();
  shippings: Array<ShippingsModel>;
}

export class Image {
  _id: string;
  url: string;
}

export class Shipping {
  firstname: string;
  lastname: string;
  tel: string;
  address: string;
  subdistrict: string;
  district: string;
  province: string;
  postcode: number;
  created: string;
}
export class Delivery {
  _id: string;
  created: string;
  days: number;
  detail: string;
  name: string;
  price: number;
  user: string;
}
export class UserModel {
  firstName: string;
  lastName: string;
  displayName: string;
  email: string;
  username: string;
  password: string;
  provider: string;
}
export class AddressModel {
  firstname: string;
  lastname: string;
  tel: string;
  address: string;
  subdistrict: string;
  district: string;
  province: string;
  postcode: string;
}
export class ShippingsModel {
  shipping: Shippings = new Shippings();
}
export class ShopModel {
  name: string;
  detail: string;
  email: string;
  tel: string;
  image: string;
  map: {
      lat: string;
      lng: string;
  }
}
export class Shippings {
  name: string;
  detail: string;
  days: number;
  price: number;
}
export class CategoryModel {
  name: string;
  detail: string;
  parent: string;
}