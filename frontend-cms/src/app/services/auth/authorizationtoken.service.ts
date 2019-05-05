import { Injectable } from '@angular/core';
import { decode } from '@angular/router/src/url_tree';
import { GLOBAL } from '../../global';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationtokenService {

	private API_URL = GLOBAL.url;
	private iss = {
		login: `${this.API_URL}login`,
		singnup: `${this.API_URL}signup`
	}
	
	constructor() { }

	handle(token){
		this.setToken(token)
	}

	//se almacena el token en el localstorage
	setToken(token: any){
		localStorage.setItem('token', token);
	}

	// función para obtener el token 
	getToken(){
		return localStorage.getItem('token');
	}

	// elliminar token
	removeToken(){
		localStorage.removeItem('token');
	}

	isValidToken(){
		const token = this.getToken();
		if(token){
			const payload = this.payloadToken(token);
			if(payload){
				return	Object.values(this.iss).indexOf(payload.iss) >-1 ? true : false;
			}
		}
		return false;
	}

	payloadToken(token){
		const payload = token.split('.')[1];
		return this.decodePayload(payload);
	}

	decodePayload(payload){
		return JSON.parse(atob(payload));
	}

	loggedIn(){
		return this.isValidToken();
	}
}
