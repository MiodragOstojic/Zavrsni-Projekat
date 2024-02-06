import { Component } from '@angular/core';
import { ShoppingServiceService } from '../services/shopping-service.service';
import { CartProduct } from '../models/CartProduct';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  shopNumber = 0;

  constructor(
    private shoppingService: ShoppingServiceService,
    ){}

    ngOnInit():void{
      this.shoppingService.getCartProducts().subscribe({ //
        next:(data: any)=> {
          let sum = 0;
          data.forEach((element: CartProduct) => {
            sum += element.quantity;
          });
          this.shoppingService.setNumberOfProducts(sum);
          this.shopNumber = sum;
        }
      })
          this.shoppingService.numberOfCartProductsSubject.subscribe((number)=>{
            this.shopNumber = number;
          })
    }
  }
