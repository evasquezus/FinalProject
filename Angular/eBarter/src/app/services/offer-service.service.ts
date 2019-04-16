import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Offer } from '../models/offer';
import { Observable } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class OfferServiceService {

  private baseUrl = 'http://localhost:8085/';


  offerUrl = this.baseUrl + 'api/offers';
  constructor(private http: HttpClient, private auth: AuthenticationService) { }

  // getOffersForItems(item: Item): Observable<Offer[]> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       Authorization: `Basic ${this.auth.getCredentials()}`
  //     })
  //   };
  //   return this.http.get<Offer[]>(this.offerUrl, httpOptions);
  // }

  getOffersForItems(item: Item): Observable<Offer[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Basic ${this.auth.getCredentials()}`
      })
    };
    return this.http.get<Offer[]>(this.offerUrl, httpOptions);
  }
}
