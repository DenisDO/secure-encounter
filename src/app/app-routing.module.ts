import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './pages/sign-in-page/sign-in-page.component';
import { UsersComponent } from './pages/users-page/users-page.component';
import { UserDetailsComponent } from './pages/users-page/user-details/user-details.component';
import { UsersListComponent } from './pages/users-page/users-list/users-list.component';
import { CanActivateApplicationPage, CanActivateUserDetails } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    component: SignInComponent
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [CanActivateApplicationPage],
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: UsersListComponent
      },
      {
        path: 'details',
        component: UserDetailsComponent,
        canActivate: [CanActivateUserDetails]
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
