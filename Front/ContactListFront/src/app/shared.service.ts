import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  readonly APIUrl = "https://localhost:44333/api";

  constructor(private http:HttpClient) { }

  getContactList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Contact');
  }

  addContact(value:any) {
    return this.http.post(this.APIUrl + '/Contact', value);
  }

  updateContact(value:any) {
    return this.http.put(this.APIUrl + '/Contact', value);
  }

  deleteContact(value:any) {
    return this.http.delete(this.APIUrl + '/Contact/' + value);
  }
}
