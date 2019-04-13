import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private baseUrl = 'http://localhost:8085/';
  // private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  login(username, password) {
    const credentials = this.generateBasicAuthCredentials(username, password);
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Basic ${credentials}`,
      })
    };
    return this.http
        .get(this.baseUrl + 'auth/authenticate', httpOptions)
        .pipe(
          tap((res) => {
            localStorage.setItem('credentials' , credentials);
            return res;
          }),
          catchError((err: any) => {
            console.log(err);
            return throwError('AuthService.login(): Error logging in.');
          })
        );
    }

    register(user: User) {
      // create request to register a new account
      console.log('authService.register(): user:');
      return this.http.post(this.baseUrl + 'register', user)
      .pipe(
          catchError((err: any) => {
            console.log(err);
            return throwError('AuthService.register(): error registering user.');
          })
        );
    }

    logout() {
      localStorage.removeItem('credentials');
    }

    checkLogin() {
      if (localStorage.getItem('credentials')) {
        return true;
      }
      return false;
    }

    getCredName() {
      const cred = localStorage.getItem('credentials');
      const plainText = atob(cred);
      const num = plainText.search(':');
      const credName = plainText.substring(0, num);
      return credName;
    }

    generateBasicAuthCredentials(username, password) {
      return btoa(`${username}:${password}`);
    }

    getCredentials() {
      return localStorage.getItem('credentials');
    }
  }

