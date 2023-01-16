import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { SessionService } from '../sessionService/session.service';
import { AuthenticatedUser } from '../../models/authenticated-user';
import { RegisterRequest } from 'src/app/auth/models/request/register';
import { HttpService } from '../../helpers/http.service';
import { BaseResponse } from '../../models/base-response';
import { LoginRequest } from 'src/app/auth/models/request/login';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseApiUrl: string = "";
  tokenKeyword: string;
  constructor(private http: HttpClient, private sessionService: SessionService) {
    this.baseApiUrl = environment.webapi.baseUri + "auth";
    this.tokenKeyword = environment.webapi.token;
  }

  getAuth(): AuthenticatedUser | void {
    var data: AuthenticatedUser = this.sessionService.get(this.tokenKeyword) as AuthenticatedUser;
    if (data != null) {
      return new AuthenticatedUser(data);
    }
  }


  // // Returns true if user is logged in
  get isAuthenticated(): boolean {
    return this.sessionService.get(this.tokenKeyword) !== null;
  }

  login(model: LoginRequest): Observable<AuthenticatedUser> {
    return this.regenerateToken(model);
  }

  register(model: RegisterRequest): Observable<any> {
    var headers = this.setHeaders();
    var url = this.baseApiUrl + "/register";
    let body = JSON.stringify(model);
    return this.http.post(url, body, { headers: headers });
  }

  logout() {
    localStorage.removeItem(this.tokenKeyword);
  }

  private regenerateToken(LoginRequest: LoginRequest) {
    var headers = this.setHeaders();
    var url = this.baseApiUrl + "/login";

    let body = JSON.stringify(LoginRequest);
    return this.http.post(url, body, { headers: headers }).pipe(map((res: any) => {
      var data: AuthenticatedUser = res.data;
      this.storeDataIntoBrowserCache(data);
      return data;
    }));
  }

  private setHeaders(): HttpHeaders {
    var headers = new HttpHeaders();
    headers = headers.set("Content-Type", "application/json");
    headers = headers.set("Access-Control-Allow-Origin", "*");
    headers = headers.set('Authorization', 'Basic ' + btoa("timeclock" + ":" + "timeclock"));
    return headers;
  }

  private storeDataIntoBrowserCache(data: AuthenticatedUser) {
    this.sessionService.set(this.tokenKeyword, data);
  }

}


