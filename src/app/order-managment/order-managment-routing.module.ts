import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { CompletedListComponent } from './completed-list/completed-list.component';
import { RequestsListComponent } from './requests-list/requests-list.component';

const routes: Routes = [
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'Pending',
    component: ListComponent
  },
  {
    path: 'Completed',
    component: CompletedListComponent
  },
  {
    path: 'requests',
    component: RequestsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderManagmentRoutingModule {}
