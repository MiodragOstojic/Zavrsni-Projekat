import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartProduct } from '../models/CartProduct';

@Injectable({
  providedIn: 'root'
})
export class ShoppingServiceService {

  numberOfCartProductsSubject: Subject<number> = new Subject<number>();
  numberOfCartProducts: number = 0;
  constructor(
    private httpClient: HttpClient
  ) { }

  getCartProducts(){
    return this.httpClient.get("http://localhost:3000/cart");
  }
  addToCart(product: CartProduct){
    return this.httpClient.post("http://localhost:3000/cart", product);
  }
  editCart(product: CartProduct){
    return this.httpClient.put("http://localhost:3000/cart"+product.product.id, product);
  }
  removeProduct(prductId: number){
    return this.httpClient.delete("http://localhost:3000/cart"+prductId);
  }

  setNumberOfProducts(numberOfProducts: number){
    this.numberOfCartProducts = numberOfProducts;
    this.numberOfCartProductsSubject.next(this.numberOfCartProducts);
  }
}
