export class OrderDetailModel {
    amount: number
    cart: string;
    discount: number;
    items: Array<Items>;
    payment : Payment = new Payment();

}
export class Items {
    delivery: Delivery = new Delivery();
    product: Product = new Product();
    amount: number;
    qty: number;
    size: string;
    status: string;
}
export class Product {
    _id: string;
    category: string;
    created: string;
    name: string;
    unitprice: number;
    sellerSummary: string;
    shop: string;
    user: string;
    image: Array<Image>;
    shippings: Array<Shippings>;
}

export class Image {
    _id: string;
    url: string;
}

export class Shippings {
    _id: string;
    shipping: string;
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
export class Payment {
    counterservice: string;
    paymenttype: string;
}