import { ProductItemModel } from "../../app/app.model";

export class ProductModel {
    items: Array<ProductList>;
}
export class ProductList {
    _id: string;
    name: string;
    detail: string;
    price: number;
    image: string;
    rate: number;
}


