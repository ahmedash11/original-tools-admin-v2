import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { PartialsModule } from '../partials/partials.module';

import { CategoriesRoutingModule } from './categories-routing.module';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    PartialsModule,
    SharedModule
  ]
})
export class CategoriesModule { }
