import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = "http://localhost:8000"
  httpHeaders = new HttpHeaders({'Content-type': 'application/json'})

  constructor(private http: HttpClient) { }

  getAllPizzas(): Observable<any>{
    return this.http.get(this.baseUrl + '/pizza/',
    {headers: this.httpHeaders})
  }
}
