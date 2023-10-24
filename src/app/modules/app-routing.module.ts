import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet, Routes } from '@angular/router';

import {HomeComponent} from "../home/home.component";
import {AboutComponent} from "../about/about.component";
import {ContactComponent} from "../contact/contact.component";
import {InfoComponent} from "../contact/info/info.component";
import {FormContactComponent} from "../contact/form-contact/form-contact.component";
import {ProductsComponent} from "../products/products.component";
import {ProductDetailComponent} from "../product-detail/product-detail.component";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";

const routes:Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {
    path: 'contact',
    component: ContactComponent,
    children: [
      {path: 'info', component: InfoComponent},
      {path: 'form-contact', component: FormContactComponent},
      {path: '', redirectTo: 'info', pathMatch: 'full'},
    ]
  },
  {path: 'product', component: ProductsComponent},
  {path: 'product/:product/:encryptId', component: ProductDetailComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent,
    ProductsComponent,
    ProductDetailComponent,
    InfoComponent,
    FormContactComponent,
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLinkActive,
    RouterLink,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],

})
export class AppRoutingModule { }
