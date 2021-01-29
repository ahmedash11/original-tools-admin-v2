// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('app/pages/auth/auth.module').then(m => m.AuthModule) },

  // enable this router to set which demo theme to load,
  {
    path: '',
    loadChildren: () => import('app/themes/system-admin/theme.module').then(m => m.ThemeModule)
  },
  { path: '**', redirectTo: 'error/403', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
