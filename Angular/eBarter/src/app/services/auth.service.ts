import { UserService } from 'src/app/services/user.service';
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
  private noAuthUrl = this.baseUrl + 'auth/register';
  // private baseUrl = environment.baseUrl;
  private url = this.baseUrl + 'api/users/';


  constructor(private http: HttpClient) { }

  login(username, password) {
    const credentials = this.generateBasicAuthCredentials(username, password);
    console.log('AuthService.login(): ' + credentials);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
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

    register(user) {
      // create request to register a new account
      const credentials = this.getCredentials();
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          // 'Authorization': `Basic ${credentials}`
        })
      };
      return this.http.post<User>(this.noAuthUrl, user).pipe(
        tap((res) => {
          // const user2 = res;
          return res;
        }),
        catchError((err: any) => {
          console.error('UserService.register(): Error');
          console.error(err);
          return throwError('Error in UserService.update()');
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

    // getCurrentUser() {
    //   const userName = this.getCredName();
    //   let user = null;
    //   let response = this.userService.getUserByUserName(userName);
    //   response.subscribe(
    //     data => {
    //       user = data;
    //     },
    //     error=> {
    //       console.log('error in auth.service.getCurrentUser()');

    //     });
    //   return user;
    // }

    generateBasicAuthCredentials(username, password) {
      return btoa(`${username}:${password}`);
    }

    getCredentials() {
      return localStorage.getItem('credentials');
    }
  }

