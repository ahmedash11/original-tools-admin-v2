import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagmentRoutingModule } from './user-managment-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PartialsModule } from '../partials/partials.module';
import { CustomersComponent } from './customers/customers.component';
import { MerchantsComponent } from './merchants/merchants.component';

@NgModule({
  declarations: [CustomersComponent, MerchantsComponent],
  imports: [
    CommonModule,
    UserManagmentRoutingModule,
    SharedModule,
    PartialsModule
  ]
})
export class UserManagmentModule {}
