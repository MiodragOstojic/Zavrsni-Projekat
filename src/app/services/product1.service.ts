import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, pipe } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class Product1Service {
imgSrc: any;
name: any;
price: any;

  constructor(
    private httpClient: HttpClient
  ) { }

  getProducts() {
    return this.httpClient.get("http://localhost:3000/products");
  }
  getProductById(productId: number) {
    return this.httpClient.get("http://localhost:3000/products/" + productId);
  }
  getProductsById(catId: number) {
    return this.httpClient.get("http://localhost:3000/products")
      .pipe(
        map((data: any) => {
          let tempData = data as Product[];
          return tempData.filter(x => x.categoryId == catId);
        })
      )
  }

}

