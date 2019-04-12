import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = environment.baseUrl;
  private url = this.baseUrl + 'api/users/';

  constructor(private http: HttpClient, private dataPipe: DatePipe, private auth: AuthenticationService) { }


  public getAll() {
    return this.http.get<User[]>('${config.apiUrl}/users');
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
  return this.http.post('${config.apiUrl}/users/register', user);
}

update(user: User) {
  const httpOptions = { headers: {'Content-type': 'application/json'}};
  return this.http.put<User>('${this.url}/${user.id}', user, httpOptions).pipe(
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
      'X-Requested-With': 'XMLHttpRequest'
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

}
