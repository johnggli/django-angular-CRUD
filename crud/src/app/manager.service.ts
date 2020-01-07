import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Manager } from './manager';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  private managersUrl = 'http://localhost:8000/manager/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getManagers(): Observable<any>{
    return this.http.get<any>(this.managersUrl);
  }

  getManager(pk: number): Observable<any>{
    return this.http.get<any>(this.managersUrl + pk);
  }

  updateManager (manager: Manager): Observable<any> {
    return this.http.put(this.managersUrl + manager.pk, manager, this.httpOptions);
  }

  addManager (manager: Manager): Observable<Manager> {
    return this.http.post<Manager>(this.managersUrl, manager, this.httpOptions);
  }

  deleteManager (manager: Manager | number): Observable<Manager> {
    const pk = typeof manager === 'number' ? manager : manager.pk;
    const url = this.managersUrl + pk;

    return this.http.delete<Manager>(url, this.httpOptions);
  }
}
