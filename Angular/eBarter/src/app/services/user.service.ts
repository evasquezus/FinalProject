import { AuthService } from './auth.service';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { throwError, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { AuthenticationService } from './authentication.service';
import { Item } from '../models/item';
import { Offer } from '../models/offer';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = environment.baseUrl;
  // private baseUrl = 'http://localhost:8085/';
  private url = this.baseUrl + 'api/users/';
  private offerUrl = this.baseUrl + 'api/offers/';

  constructor(private http: HttpClient, private dataPipe: DatePipe, private auth: AuthenticationService, private as: AuthService) { }


  public getAll() {
    const credentials = this.as.getCredentials();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Basic ${credentials}`
      })
    };
    return this.http.get<User[]>(this.url, httpOptions);
  }

  public getById(id: number) {
    return this.http.get(`${this.url}/${id}`).pipe(
      catchError((err: any) => {
        console.error('UserService.getById(): Error');
        console.error(err);
        return throwError('Error in UserService.getById()');
      })
    );
  }

  register(user: User) {
    const credentials = this.as.getCredentials();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Basic ${credentials}`
      })
    };
    console.log(user.firstName);
    return this.http.post(`${this.url}${user.id}`, user, httpOptions).pipe(
      catchError((err: any) => {
        console.error('UserService.register(): Error');
        console.error(err);
        return throwError('Error in UserService.update()');
      })
    );
  }

  update(user: User) {
    const credentials = this.as.getCredentials();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Basic ${credentials}`
      })
    };
    return this.http.put<User>(`${this.url}${user.id}`, user, httpOptions).pipe(
      catchError((err: any) => {
        console.error('UserService.update(): Error');
        console.error(err);
        return throwError('Error in UserService.update()');
      })
    );
  }

  delete(id: number) {
    return this.http.delete('${this.url}/${id}').pipe(
      catchError((err: any) => {
        console.error('UserService.destroy(): Error');
        console.error(err);
        return throwError('Error in UserService.update()');
      })
    );
  }
  getHttp() {
    const credentials = this.auth.getCredentials();
    return {
      headers: {
        Authorization: `Basic ${credentials}`,
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      }
    };
  }

  getLoggedIn() {
    return this.http.get<User>(this.url + '/username', this.getHttp())
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('Error in service index');
        })
      );
  }

  getUserByUserName(userName): Observable<User> {
    const credentials = this.as.getCredentials();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: `Basic ${credentials}`
      })
    };
    return this.http.get<User>(this.url + 'username/' + userName, httpOptions);
  }

  // getUserNameForOffers(item: Item): Observable<Item[]> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       Authorization: `Basic ${this.auth.getCredentials()}`
  //     })
  //   };
  //   return this.http.get<Item[]>(this.offerUrl, httpOptions);
  // }
}
