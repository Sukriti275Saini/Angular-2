import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyservicesService {

  jsonurl:string = "http://localhost:3000/Users";

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<any> {
    return this.http.get(this.jsonurl);
  }

  getOne(id): Observable<any> {
    return this.http.get(this.jsonurl+'/'+id);
  }

  addOne(data): Observable<any>{
    return this.http.post(this.jsonurl, data);
  }

  deleteOne(id:number): Observable<any>{
    return this.http.delete(this.jsonurl+'/'+id);
  }

  editOne(id:number, data): Observable<any>{
    return this.http.put(this.jsonurl+'/'+id, data);
  }

}
