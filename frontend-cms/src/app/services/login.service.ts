import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { GLOBAL } from "../global";
import { BehaviorSubject, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

	private tokenSubject = new BehaviorSubject(null);
    private API_URL = GLOBAL.url;
  

  	constructor(private http: HttpClient) {}


	login( user : any, pass : any ) {
		let body = new HttpParams();
        body = body.set('email', user);
		body = body.set('password', pass);
		const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
		return this.http.post<any>(`${this.API_URL}login`, body, { headers: headers});
	}



}
