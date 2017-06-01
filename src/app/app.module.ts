import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routing, RoutingProviders } from './app.routes';

import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { AddProductPageComponent } from './pages/add-product-page/add-product-page.component';
import { EditProductPageComponent } from './pages/edit-product-page/edit-product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ProductPageComponent,
    HeaderComponent,
    FooterComponent,
    AddProductPageComponent,
    EditProductPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    Routing
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
