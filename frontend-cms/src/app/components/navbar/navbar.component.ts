import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { AuthorizationtokenService } from 'src/app/services/auth/authorizationtoken.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	public loggedIn: boolean;

	constructor(
		private _authService: AuthService,
		private _tokenService: AuthorizationtokenService,
		private router: Router) { }

	ngOnInit() {
		this._authService.authStatus.subscribe( value => this.loggedIn = value);
	}

	logout(e: MouseEvent){
		e.preventDefault();
		this._tokenService.removeToken();
		this._authService.changeAuthStatus(false);
		this.router.navigateByUrl('login');

	}

}
