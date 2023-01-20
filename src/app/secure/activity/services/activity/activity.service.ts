import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/helpers/http.service';
import { BaseResponse } from 'src/app/core/models/base-response';
import { ShiftDataRequest } from '../../models/request/shift-data-request';
import { ShiftDataResponse } from '../../models/response/shift-data-response';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private httpService: HttpService) { }

  getShiftData(employeeId: string = ""): Observable<BaseResponse<Array<ShiftDataResponse>>> {
    return this.httpService.getAll<BaseResponse<Array<ShiftDataResponse>>>("activity/GetShiftData?employeeId=" + employeeId)
  }

  startShift(): Observable<BaseResponse<ShiftDataResponse>> {
    return this.httpService.post("activity/startshift");
  }

  startBreak(model: ShiftDataRequest) {
    return this.httpService.post("activity/startbreak", model);
  }

  endBreak(model: ShiftDataRequest) {
    return this.httpService.post("activity/endbreak", model);
  }

  startLunch(model: ShiftDataRequest) {
    return this.httpService.post("activity/startlunch", model);
  }

  endLunch(model: ShiftDataRequest) {
    return this.httpService.post("activity/endlunch", model);
  }

  endShift(model: ShiftDataRequest) {
    return this.httpService.post("activity/endshift", model);
  }
}
