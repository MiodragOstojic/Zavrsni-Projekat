import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/Product';
import { Product1Service } from '../services/product1.service';
import { ShoppingServiceService, } from '../services/shopping-service.service';
import { subscribe } from 'node:diagnostics_channel';
import { CartProduct } from '../models/CartProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  currentProduct: Product
  // shoppingService: ShoppingServiceService;

  constructor(
    private productService: Product1Service,
    private shoppingService: ShoppingServiceService,
    private route: ActivatedRoute,
  ) { }
  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.getProduct(params['id']);
    })
  }
  getProduct(id: string) {
    this.productService.getProductById(+id),({   //.subscribe
      next: (data: any) => {
        this.currentProduct = data;
      }
    })
  }

  addToCart(quantity: string) {
    this.shoppingService.getCartProducts().subscribe({  
      next: (data: any) => {
        let allProducts = data as CartProduct[];
        let isExistProd = allProducts.find(x => x.product.id == this.currentProduct.id);
        if (isExistProd) {
          let cartProd = new CartProduct(isExistProd.product.id, isExistProd.product.name, isExistProd.product.price, isExistProd.product.imgSrc, isExistProd.product.categoryId, isExistProd.quantity + +quantity);
          this.shoppingService.editCart(cartProd).subscribe({ 
            next: (data: any) => {
              alert("Successfully updated");
              this.shoppingService.setNumberOfProducts(this.shoppingService.numberOfCartProducts + +quantity);
            }
          })
        }
        else {
          let cartProd = new CartProduct(this.currentProduct.id, this.currentProduct.name, this.currentProduct.price, this.currentProduct.imgSrc, this.currentProduct.categoryId, +quantity);
          this.shoppingService.addToCart(cartProd).subscribe({ 
            next: (data: any) => {
              alert("Successfully added!");
              this.shoppingService.setNumberOfProducts(this.shoppingService.numberOfCartProducts + +quantity);
            }
          })
        }
      }
    })
  }
}
