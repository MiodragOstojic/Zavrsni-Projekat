import { Component, OnInit } from '@angular/core';
import { Product1Service } from '../services/product1.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/Product';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

      allProducts: Product[] = [];

        constructor(
          private product1Service: Product1Service,
          private route: ActivatedRoute,
          private router: Router
        ){}

        selectProduct(product:Product){
          this.router.navigate(['/product', product.id])
        }

        ngOnInit(): void{
          let catId = this.route.snapshot.params['id'];
          this.getProductsByCatId(catId);
        }
  getProductsByCatId(catId: string) {
    this.product1Service.getProductsById(+catId),({  //.subscribe
      next:(data: any) => {
        this.allProducts = data;
      },
      error: (err: { error: any; }) =>{
        alert(err.error);
      }
    })
  }
}
