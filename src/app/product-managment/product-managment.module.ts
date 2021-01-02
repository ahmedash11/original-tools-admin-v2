import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductManagmentRoutingModule } from './product-managment-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PartialsModule } from '../partials/partials.module';
import { ProductsComponent } from './products/products.component';
import { BrandsComponent } from './brands/brands.component';
import { CategoriesComponent } from './categories/categories.component';
import { TagsComponent } from './tags/tags.component';
import { OffersComponent } from './offers/offers.component';
import { AdsComponent } from './ads/ads.component';

@NgModule({
  declarations: [
    ProductsComponent,
    BrandsComponent,
    CategoriesComponent,
    TagsComponent,
    OffersComponent,
    AdsComponent
  ],
  imports: [
    CommonModule,
    ProductManagmentRoutingModule,
    SharedModule,
    PartialsModule
  ]
})
export class ProductManagmentModule {}
