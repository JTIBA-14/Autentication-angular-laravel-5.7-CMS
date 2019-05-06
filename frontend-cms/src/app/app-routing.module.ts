import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { SigupComponent } from './components/sigup/sigup.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';

const AppRoutes: Routes = [
 
  {
    path: 'login', 
    component: LoginComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'signup', 
    component: SigupComponent,
    canActivate: [AfterLoginService]
  },
  // {
  //   path: 'profile', 
  //   component: ProfileComponent,
  //   canActivate: [AfterLoginService]
  // },
  // {
  //   path: 'request-password-reset', 
  //   component: RequestResetComponent,
  //   canActivate: [AfterLoginService]
  // },
  // {
  //   path: 'response-password-reset', 
  //   component: ResponseResetComponent,
  //   canActivate: [AfterLoginService]
  // },
  // {
  //   path: 'dashboard', 
  //   component: ProfileComponent,
  //   canActivate: [AfterLoginService]
  // },
  {
    path: '**', 
    component: LoginComponent,
    canActivate: [BeforeLoginService]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(AppRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
