import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(public _httpClient:HttpClient) { }

  getaccounts():Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals")
  }

  getfilteredaccounts(accname:string):Observable<any>{
     return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter="+accname);
  }

  getpaggedaccounts(pageNo:number):Observable<any>{
   return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit=15&page="+pageNo)
  }

  getsortedaccounts(column:string,order:string):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy="+column+"&order="+order)
  }

  getdeletedaccounts(id:string):Observable<any>{
     return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id);
  }

  // post
  postcreateaccount(data:any):Observable<any>{
   return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/principals",data);
  }
}
