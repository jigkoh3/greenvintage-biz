export class OrderModel {
    waiting: Array<OrderItemModel>;
    accept: Array<OrderItemModel>;
    unreceive: Array<OrderItemModel>;
}

export class OrderItemModel {
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