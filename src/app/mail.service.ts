import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private _httpClien:HttpClient) { }
  getmail():Observable<any>{
     return this._httpClien.get("https://jsonplaceholder.typicode.com/todos")
  }
}
