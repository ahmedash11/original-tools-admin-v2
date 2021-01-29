import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { BrandsComponent } from './brands/brands.component';
import { CategoriesComponent } from './categories/categories.component';
import { TagsComponent } from './tags/tags.component';
import { OffersComponent } from './offers/offers.component';
import { AdsComponent } from './ads/ads.component';
import { SectionsComponent } from './sections/sections.component';
import { SubcategoriesComponent } from './subcategories/subcategories.component';
import { ToolbarComponent } from './toolbar/toolbars.component';

const routes: Routes = [
  {
    path: 'brands',
    component: BrandsComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'subcategories',
    component: SubcategoriesComponent
  },
  {
    path: 'tags',
    component: TagsComponent
  },
  {
    path: 'offers',
    component: OffersComponent
  },
  {
    path: 'ads',
    component: AdsComponent
  },
  {
    path: 'sections',
    component: SectionsComponent
  },
  {
    path: 'toolbar',
    component: ToolbarComponent
  },
  {
    path: 'list',
    component: ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductManagmentRoutingModule {}
