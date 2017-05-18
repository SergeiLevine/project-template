import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { AppConfig } from '../app.config';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http, private config: AppConfig) { }

    login(user: string, pass: string) {
        
        //console.log(this.config.apiUrl);
        //this.http.post(this.config.apiUrl, { username: username, password: password});
        
        return this.http.post(this.config.apiUrl, {username:user,password:pass}).map((r: Response) => {
                console.log(r.text());
                var u=r.json();
                
                //console.log(user);
                if (u == 'admin logged in') {
                    console.log('logged in')
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                
         });

    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}