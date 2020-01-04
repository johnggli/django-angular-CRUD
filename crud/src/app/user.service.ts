import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'http://localhost:8000/api/token/';  // URL to web api

  constructor(private http: HttpClient) { }

  loginUser(userData): Observable<any> {
    return this.http.post<any>(this.usersUrl, userData);
  }
}
