import { ContainerComponent } from './Container/container.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TestComponent } from './test/test.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ActionFilterComponent } from './Fragment/action-filter/action-filter.component';
import { FiltersAspnetComponent } from './Fragment/filters-aspnet/filters-aspnet.component';
import { ResourceFilterComponent } from './Fragment/resource-filter/resource-filter.component';
import { AuthFilterComponent } from './Fragment/auth-filter/auth-filter.component';
import { ProductService } from './services/product.service';
import { LogService } from './services/log.service';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    TestComponent,
    SearchComponent,
    ProductComponent,
    AboutComponent,
    ContactComponent,
    ActionFilterComponent,
    FiltersAspnetComponent,
    ResourceFilterComponent,
    AuthFilterComponent,
    HomeComponent,
    ProductDetailsComponent,
    ErrorComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
