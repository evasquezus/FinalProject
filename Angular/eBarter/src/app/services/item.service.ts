import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Item } from '../models/item';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { Offer } from '../models/offer';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private baseUrl = environment.baseUrl;
  // private baseUrl = 'http://localhost:8085/';

  itemUrl = this.baseUrl + 'api/items';


  // specificItem = itemUrl +
  // private baseUrl = environment.baseUrl;
  // private url = this.baseUrl + 'api/users/';
  constructor(private http: HttpClient, private auth: AuthenticationService) { }


  getItems(): Observable<Item[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: `Basic ${this.auth.getCredentials()}`
      })
    };
    return this.http.get<Item[]>(this.itemUrl, httpOptions);
  }

  getSpecificItem(item: Item | number): Observable<Item> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: `Basic ${this.auth.getCredentials()}`
      })
    };
    const id = typeof item === 'number' ? item : item.id;
    const url = `${this.itemUrl}/${id}`;
    return this.http.get<Item>(url, httpOptions);
  }

  saveItem(item: Item): Observable<Item> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: `Basic ${this.auth.getCredentials()}`
      })
    };
    return this.http.post<Item>(this.itemUrl, item, httpOptions);
  }
  removeItem(item: Item | number): Observable<Item> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: `Basic ${this.auth.getCredentials()}`
      })
    };
    const id = typeof item === 'number' ? item : item.id;
    const url = `${this.itemUrl}/${id}`;

    return this.http.delete<Item>(url, httpOptions);
  }

  updateItem(item: Item): Observable<Item> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: `Basic ${this.auth.getCredentials()}`
      })
    };
    const url = `${this.itemUrl}/${item.id}`;

    return this.http.put<Item>(url, item, httpOptions);
  }

  updateItemStatus(item: Item): Observable<Item> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: `Basic ${this.auth.getCredentials()}`
      })
    };
    const url = `${this.itemUrl}/${item.id}`;

    return this.http.put<Item>(url, item, httpOptions);
  }

}
