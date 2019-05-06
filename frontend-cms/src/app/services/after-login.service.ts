import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { AuthorizationtokenService } from './auth/authorizationtoken.service';

@Injectable()
export class AfterLoginService implements CanActivate {
  
	  constructor(private tokenService: AuthorizationtokenService) { }
	  
	  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
		return this.tokenService.loggedIn();
	}
}
