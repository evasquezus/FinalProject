import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Offer } from '../models/offer';
import { Observable } from 'rxjs';
import { Item } from '../models/item';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OfferServiceService {

  private baseUrl = environment.baseUrl;
  // private baseUrl = 'http://localhost:8085/';


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
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: `Basic ${this.auth.getCredentials()}`
      })
    };
    return this.http.get<Offer[]>(this.offerUrl, httpOptions);
  }

  getSpecificItemOffers(item: Item | number): Observable<Offer[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: `Basic ${this.auth.getCredentials()}`
      })
    };
    const id = typeof item === 'number' ? item : item.id;
    const url = `${this.offerUrl}/${id}/offers`;
    return this.http.get<Offer[]>(url, httpOptions);
  }

  postNewOffer(offer: Offer) {
    console.log('in offer service: ' + offer);
    console.log('in service imgUrl: ' + offer.imgUrl);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: `Basic ${this.auth.getCredentials()}`
      })
    };
    return this.http.post<Offer>(this.offerUrl, offer, httpOptions);
  }
}
