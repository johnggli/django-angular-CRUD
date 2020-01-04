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

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }
  
  getPizzas(): Observable<any>{
    return this.http.get<any>(this.pizzasUrl);
  }

  getPizza(pk: number): Observable<any>{
    return this.http.get<any>(this.pizzasUrl + pk);
  }

  updatePizza (pizza: Pizza): Observable<any> {
    return this.http.put(this.pizzasUrl + pizza.pk, pizza, this.httpOptions);
  }

  addPizza (pizza: Pizza): Observable<Pizza> {
    return this.http.post<Pizza>(this.pizzasUrl, pizza, this.httpOptions);
  }

  deletePizza (pizza: Pizza | number): Observable<Pizza> {
    const pk = typeof pizza === 'number' ? pizza : pizza.pk;
    const url = this.pizzasUrl + pk;

    return this.http.delete<Pizza>(url, this.httpOptions);
  }
}
