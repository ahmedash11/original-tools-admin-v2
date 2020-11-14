import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandsRoutingModule } from './brands-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PartialsModule } from '../partials/partials.module';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    BrandsRoutingModule,
    SharedModule,
    PartialsModule
  ]
})
export class BrandsModule { }
