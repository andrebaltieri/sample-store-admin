import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthService } from './services/auth.service';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { AddProductPageComponent } from './pages/add-product-page/add-product-page.component';
import { EditProductPageComponent } from './pages/edit-product-page/edit-product-page.component';

const appRoutes: Routes = [
    { path: '', component: LoginPageComponent },
    { path: 'products', component: ProductPageComponent },
    { path: 'products/add', component: AddProductPageComponent },
    { path: 'products/edit/:id', component: EditProductPageComponent }
];

export const RoutingProviders: any[] = [

];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);