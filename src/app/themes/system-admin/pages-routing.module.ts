// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { BaseComponent } from './base/base.component';
import { ErrorPageComponent } from './content/error-page/error-page.component';
// Auth
import { AuthGuard } from '../../services/auth.guard';
// Admin
// import { AdminGuard } from '../../services/admin.guard';
// Other imports
import { HomepageComponent } from '../../pages/homepage/homepage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from '../../shared/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'homepage',
        component: HomepageComponent
      },
      {
        path: 'dashboard/statistics',
        component: DashboardComponent
      },
      {
        path: 'users',
        loadChildren: () => import('../../user-managment/user-managment.module').then(m => m.UserManagmentModule)
      },
      {
        path: 'products',
        loadChildren:
          () => import('../../product-managment/product-managment.module').then(m => m.ProductManagmentModule)
      },
      {
        path: 'orders',
        loadChildren:
          () => import('../../order-managment/order-managment.module').then(m => m.OrderManagmentModule)
      },
      { path: 'error/:type', component: ErrorPageComponent },
      { path: '', redirectTo: 'products/list', pathMatch: 'full' },
      { path: '**', component: NotFoundComponent, pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
