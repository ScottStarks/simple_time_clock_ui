import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { AuthenticationService } from '../services/authenticationService/authentication.service';

export class Parameter {
  public EmployeeId: number;
  constructor(init: Partial<Parameter>) {
    Object.assign(this, init);
    this.EmployeeId = 0;
  }
}

interface IHttpMethods {
  get<T>(url: string, id?: number): Observable<T>;
  getAll<T>(url: string, params?: Parameter): Observable<T>;
  getAllById<T>(url: string, id?: string): Observable<T>;
  post(url: string, data: any): Observable<any>;
  delete(url: string, id: number): Observable<any>;
}

@Injectable({
  providedIn: 'root'
})
export class HttpService implements IHttpMethods {

  constructor(private http: HttpClient, private authenticateService: AuthenticationService) { }

  get<T>(url: string, id?: number | undefined): Observable<T> {
    var headers = this.setHeaders();

    url = this.generateUrl(url) + "/" + id;
    return this.http
      .get(url, { headers: headers }).pipe((response: any) => {
        return response;
      });
  }

  getAll<T>(url: string, params?: Parameter | undefined): Observable<T> {
    url = this.generateUrl(url);
    var headers = this.setHeaders(params);
    return this.http
      .get(url, { headers: headers })
      .pipe((response: any) => {
        return response;
      });
  }

  getAllById<T>(url: string, id?: string): Observable<T> {
    var headers = this.setHeaders();

    url = this.generateUrl(url) + "/" + id;
    return this.http
      .get(url, { headers: headers }).pipe((response: any) => {
        return response;
      });
  }


  post(url: string, data: any = null): Observable<any> {
    var headers = this.setHeaders();
    url = this.generateUrl(url);
    let body = null;
    if (data) {
      body = JSON.stringify(data);
    }
    return this.http.post(url, body, { headers: headers });
  }


  delete(url: string, id: number): Observable<any> {
    var headers = this.setHeaders();
    url = this.generateUrl(url) + "/" + id;
    return this.http.delete(url, { headers: headers });
  }

  private generateUrl(rawUrl: String): string {
    return environment.webapi.baseUri + rawUrl;
  }

  private setHeaders(params?: Parameter): HttpHeaders {
    var headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');

    var getAuth = this.authenticateService.getAuth();

    if (getAuth != null) {
      headers = headers.set('EmployeeId', getAuth.employeeId);
      headers = headers.set('authorization', "Bearer " + getAuth.tokens.token);
    }

    return headers;
  }
}
