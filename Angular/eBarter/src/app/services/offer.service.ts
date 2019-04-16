import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Offer } from '../models/offer';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  private baseUrl = 'http://localhost:8085/';
  private url = this.baseUrl + 'api/offers/';

  constructor(private authService: AuthService,
              private http: HttpClient) { }

  makeNewOffer(offer: Offer) {
    const credentials = this.authService.getCredentials();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Basic ${credentials}`
      })
    };
    return this.http.post<Offer>(this.url, offer, httpOptions).pipe(
      catchError((err: any) => {
        console.error('UserService.update(): Error');
        console.error(err);
        return throwError('Error in UserService.update()');
      })
    );
  }

}
