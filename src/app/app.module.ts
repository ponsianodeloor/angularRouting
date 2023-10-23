import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterLink, RouterLinkActive, RouterModule, RouterOutlet, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { InfoComponent } from './contact/info/info.component';
import { FormContactComponent } from './contact/form-contact/form-contact.component';

const routes: Routes = [
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
    AppComponent,
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
    BrowserModule,
    RouterOutlet,
    RouterLinkActive,
    RouterLink,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
