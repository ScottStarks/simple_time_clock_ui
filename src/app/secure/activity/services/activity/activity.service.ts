import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/helpers/http.service';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private httpService: HttpService) { }

  startShift(){
    return this.httpService.post("activity/startshift");
  }

  startBreak(){
    return this.httpService.post("activity/startbreak");
  }

  endBreak(){
    return this.httpService.post("activity/endbreak");
  }

  startLunch(){
    return this.httpService.post("activity/startlunch");
  }

  endLunch(){
    return this.httpService.post("activity/endlunch");
  }

  endShift(){
    return this.httpService.post("activity/startShift");
  }
}
