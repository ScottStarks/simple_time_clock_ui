import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthenticationService } from '../services/authenticationService/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class BehaviorSubjectService {
  private _isAuthenticated!: BehaviorSubject<boolean>;
  private _isAuthenticated$!: Observable<boolean>;

  constructor(private authenticationService: AuthenticationService) {
    this.initIsAuthenticated();
   }

  initIsAuthenticated() {
    this._isAuthenticated = new BehaviorSubject<boolean>(this.authenticationService.isAuthenticated);
    this._isAuthenticated$ = this._isAuthenticated.asObservable();
  }

  getIsAuthenticated(): Observable<boolean> {
    return this._isAuthenticated$;
  }

  setIsAuthenticated(isAuthenticated: boolean) {
    return this._isAuthenticated.next(isAuthenticated);
  }

}
