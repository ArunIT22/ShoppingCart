import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { ErrorComponent } from './error/error.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductRouteGuardService } from './services/product-route-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Product', component: ProductComponent },

  //CanActivate Route
  //{ path: 'Product', component: ProductComponent, canActivate: [ProductRouteGuardService] },

  //Route Value
  // { path: 'Product/detail/:id', component: ProductDetailsComponent },

  //Child Route, Implement CanActivateChild
  {
    path: 'Product', children: [
      { path: 'detail/:id', component: ProductDetailsComponent }
    ], canActivateChild: [ProductRouteGuardService]
  },

  //Wild Card Route, in case of error in the route
  { path: '404', component: ErrorComponent },
  { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
