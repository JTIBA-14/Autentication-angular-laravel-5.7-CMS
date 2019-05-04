import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { SigupComponent } from './components/sigup/sigup.component';

const AppRoutes: Routes = [
  {
    path: 'login', 
    component: LoginComponent,
  },
  {
    path: 'logout', 
    component: LogoutComponent,
  },
  {
    path: 'signup', 
    component: SigupComponent,
  },
  {
    path: 'profile', 
    component: ProfileComponent,
  },
  {
    path: 'request-password-reset', 
    component: RequestResetComponent,
  },
  {
    path: 'response-password-reset', 
    component: ResponseResetComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(AppRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
