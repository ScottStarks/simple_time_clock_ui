import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth/auth.guard';

const routes: Routes = [
  {
    path : '',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path : 'auth/login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'secure/activity',
    loadChildren:()=> import('./secure/activity/activity.module').then(m => m.ActivityModule),
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
