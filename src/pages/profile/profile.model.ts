export class ProfileModel{
    name: string;
    detail: string;
    image:string;
    tel: string;
    email: string;
    Address : Array<Address>;
    Map : Map = new Map();

}

export class Address{
    firstname: string;
    lastname: string;
    tel: string;
    address: string;
    subdistrict: string;
    district: string;
    province: string;
    postcode: string;
}

export class Map {
    lat : string;
    long : string;
}