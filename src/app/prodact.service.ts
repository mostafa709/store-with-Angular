import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdactService {

  constructor(private http:HttpClient) { }
  getProuduct ():Observable<any>{
  return  this.http.get("https://fakestoreapi.com/products")
  }
  getProuductDetalid(id:number):Observable<any>{
    return this.http.get("https://fakestoreapi.com/products/"+id)
  }
}
