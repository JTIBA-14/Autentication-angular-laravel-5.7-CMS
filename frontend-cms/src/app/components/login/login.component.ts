import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	public formLogin: FormGroup;


	constructor() { 
		
	}

	ngOnInit() {
		this.formLogin = new FormGroup({
			userLogin: new FormControl( null, Validators.required ),
			userPassword: new FormControl( null, Validators.required )
		});
	}

	ingresar() {
		// stop here if form is invalid
        if (this.formLogin.invalid) {
            return;
        }
		console.log('ingresa')
		console.log('form : ', this.formLogin);
	}

}
