import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Item } from '../models/item';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ItemNoAuthService {
  private baseUrl = environment.baseUrl;

  // private baseUrl = 'http://localhost:8085/';
  itemUrlNoAuth = this.baseUrl + 'landing/items';

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      })
    };
    return this.http.get<Item[]>(this.itemUrlNoAuth, httpOptions);
  }

  popUpEnsureUserRegisters() {

    }
  }

