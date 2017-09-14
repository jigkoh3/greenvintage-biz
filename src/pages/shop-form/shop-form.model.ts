import { AuthorizeModel } from "../register/register.model";
export class ShopModel {
    _id: string;
    name: string;
    detail: string;
    email: string;
    image: string;
    tel: string;
    map: Map = new Map();
    user: AuthorizeModel = new AuthorizeModel();

}
export class Map {
    lat: string;
    long: string;
}