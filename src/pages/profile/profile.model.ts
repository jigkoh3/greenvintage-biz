export class ProfileModel {
    name: string;
    detail: string;
    image: string;
    tel: string;
    email: string;
    address: AddressModel = new AddressModel();
}

export class AddressModel {
    firstname: string;
    lastname: string;
    address: string;
    district: string;
    subdistrict: string;
    province: string;
    postcode: string;
    country: string;
}