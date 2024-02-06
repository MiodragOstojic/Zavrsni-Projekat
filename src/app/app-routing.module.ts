import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SocialSidebarComponent } from './social-sidebar/social-sidebar.component';
import { ShopComponent } from './shop/shop.component';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'social-sidebar', component: SocialSidebarComponent },
  { path: 'shop', component: ShopComponent },
  {path: 'login', component: LoginComponent},
  {path: 'singup', component: SingupComponent},
  // {path:'shopping-cart', component:ShoppingCartComponent}
  {path: 'about',component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
