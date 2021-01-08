import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderManagmentRoutingModule } from './order-managment-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PartialsModule } from '../partials/partials.module';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { CompletedListComponent } from './completed-list/completed-list.component';
import { RequestsListComponent } from './requests-list/requests-list.component';

@NgModule({
  declarations: [
    DetailsComponent,
    ListComponent,
    CompletedListComponent,
    RequestsListComponent
  ],
  imports: [
    CommonModule,
    OrderManagmentRoutingModule,
    SharedModule,
    PartialsModule
  ]
})
export class OrderManagmentModule {}
