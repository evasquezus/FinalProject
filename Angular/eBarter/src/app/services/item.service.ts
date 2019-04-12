import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Item } from '../models/item';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private baseUrl = 'http://localhost:8085/';
  itemUrl = this.baseUrl +  'api/items';
  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemUrl);
  }

  saveItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.itemUrl, item, httpOptions);
  }
  removeItem(item: Item | number): Observable<Item> {
    const id = typeof item === 'number' ? item : item.id;
    const url = `${this.itemUrl}/${id}`;

    return this.http.delete<Item>(url, httpOptions);
  }

  updateItem(item: Item): Observable<Item> {
    const url = `${this.itemUrl}/${item.id}`;

    return this.http.put<Item>(url, item, httpOptions);
  }

}
