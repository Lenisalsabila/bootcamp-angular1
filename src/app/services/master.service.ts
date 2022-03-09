import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Kategori} from "../model/kategori.model";

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  constructor(private http: HttpClient) {
  }
  list(): Observable<any> {
    return this.http.get(environment.baseUrl + '/list').pipe(map(data => data))
  }
  saveCategory( datak: Kategori): Observable<any>{
    return this.http.post(environment.baseUrl +'/input', datak).pipe(map(data => data))
  }

  updateCategory( datak: Kategori): Observable<any>{
    return this.http.post(environment.baseUrl +'/update', datak).pipe(map(data => data))
  }

  getDeptById( id: number): Observable<any>{
    return this.http.get(environment.baseUrl + '/findById/'+id)
      .pipe(map(data => data))
  }
  delete(category_id:any){
    return this.http.delete(environment.baseUrl+ '/delete/' + category_id)
  }
}
