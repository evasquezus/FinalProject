import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  private baseUrl = environment.baseUrl;
  showWarning: boolean;
  showSuspended: boolean;




  constructor() { }
}
