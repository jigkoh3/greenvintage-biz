export class ProductModel {
    name: string;
    detail: string;
    price: number;
    preparedays: number;
    image: Array<ImageModel>;
    shippings: Array<shippping>;
    category: CategoryModel = new CategoryModel();
    size: SizeModel = new SizeModel();
    issize: boolean;
    shop: ShopModel = new ShopModel();

}
// shop: ShopModel = new ShopModel();

export class ImageModel {
    url: string;
}

export class CategoryModel {
    name: string;
    detail: string;
    parent: string;
    // subcategory: SubCategoryModel = new SubCategoryModel();
}
// export class SubCategoryModel {
//     name: string;
//     detail: string;
//     parent: string;
// }

export class shippping {
    shipping: ShippingModel = new ShippingModel();
}

export class ShippingModel {
    name: string;
    detail: string;
    days: number;
    price: number;
    user: UserModel = new UserModel();
}

export class UserModel {
    firstName: string;
    lastName: string;
    displayName: string;
    email: string;
    username: string;
    password: string
    provider: string;
}

export class SizeModel {
    detail: string;
    sizedetail: Array<SizeDetailModel>;
}
export class SizeDetailModel {
    name: string;
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
    };
    address: Array<address>;
    user: UserModel = new UserModel();
}

export class address {
    address: AddressModel = new AddressModel();
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
    user: UserModel = new UserModel();
}




