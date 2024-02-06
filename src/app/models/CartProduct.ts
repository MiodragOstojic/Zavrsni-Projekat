import { Product } from "./Product";

export class CartProduct{
    public id: number;
    public product: Product;
    public quantity: number;

    constructor ( id: number, name:string, price: number, imgSrc: string, catId: number, quantity: number){
        this.id = id;
        this.product = new Product(id, name,price,imgSrc,catId);
        this.quantity = quantity;
    }
}