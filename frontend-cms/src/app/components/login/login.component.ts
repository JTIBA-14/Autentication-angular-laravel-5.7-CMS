import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { AuthorizationtokenService } from '../../services/auth/authorizationtoken.service';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	public formLogin: FormGroup;
	isSubmitted = false;
	public error = null;

	constructor( 
		private formBuilder: FormBuilder, 
		private _loginService: LoginService,
		private _tokenService: AuthorizationtokenService,
		private router: Router,
		private _authService: AuthService) { 

		this.formLogin = this.formBuilder.group({
			userLogin: [null, [Validators.required, Validators.email]],
			userPassword: [null, [Validators.required, Validators.minLength(6)]]
		})
	}

	ngOnInit() {
		
	}

	get f() { return this.formLogin.controls; }

	ingresar() {
		this.isSubmitted = true;
		// stop here if form is invalid
		if (this.formLogin.invalid) {
			return;
		}
		const datos = this.formLogin.value;
		if(this.formLogin.valid){
			this._loginService.login( datos.userLogin, datos.userPassword )
                .subscribe(
                    response => this.handleResponse( response ),
                    error => this.handleError( error.error )					
                    
                );
		}

	}

	//validacion del token
	handleResponse( data ){
		this._tokenService.handle(data.access_token);
		this._authService.changeAuthStatus(true);
		this.router.navigateByUrl('profile');
	}

	//muestra el mensaje de error al usuario
	handleError( error:any ){
		this.error = error.error;
	}

}
