export class OrderModel {
    items: Array<OrderItemModel>;
}

export class OrderItemModel {
    name: String;
    image: String;
    price: Number;
    normalprice: Number;
    discount: Number;
    discounttype: String;
    currency: String;
    rate: Number;
    description: string;
  }