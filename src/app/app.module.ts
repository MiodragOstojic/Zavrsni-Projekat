import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialSidebarComponent } from './social-sidebar/social-sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ShopComponent } from './shop/shop.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component'; 
import { FormsModule } from '@angular/forms';
import { SimpathyComponent } from './shop/simpathy/simpathy.component';
import { AnniversaryComponent } from './shop/anniversary/anniversary.component';
import { CongrationsComponent } from './shop/congrations/congrations.component';
import { GetWellComponent } from './shop/get-well/get-well.component';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductOrderComponent } from './product-order/product-order.component';
import { UsersComponent } from './users/users.component';
import { ModelsComponent } from './models/models.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialSidebarComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ShopComponent,
    CategoryComponent,
    ProductComponent,
    SimpathyComponent,
    AnniversaryComponent,
    CongrationsComponent,
    GetWellComponent,
    LoginComponent,
    SingupComponent,
    ShoppingCartComponent,
    ProductOrderComponent,
    UsersComponent,
    ModelsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


