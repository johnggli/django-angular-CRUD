import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Pizza } from './pizza';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  private pizzasUrl = 'http://localhost:8000/pizza/';  // URL to web api
  // httpHeaders = new HttpHeaders({'Content-type': 'application/json'});

  constructor(private http: HttpClient) { }
  
  getPizzas(): Observable<any>{
    return this.http.get<any>(this.pizzasUrl);
  }

  getPizza(pk: number): Observable<any>{
    return this.http.get<any>(this.pizzasUrl + pk);
  }
}
