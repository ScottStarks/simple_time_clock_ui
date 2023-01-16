import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {
  }

  set(key: string, val: any): void {
    this.storage.set(key, val);
  }

  get(key: string): any {
    return this.storage.get(key);
  }
}