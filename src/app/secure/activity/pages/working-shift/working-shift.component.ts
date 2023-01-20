import { Component, OnInit } from '@angular/core';
import { AuthenticatedUser } from 'src/app/core/models/authenticated-user';
import { BaseResponse } from 'src/app/core/models/base-response';
import { AlertService } from 'src/app/core/services/alertService/alert.service';
import { AuthenticationService } from 'src/app/core/services/authenticationService/authentication.service';
import { ShiftDataRequest } from '../../models/request/shift-data-request';
import { ShiftDataResponse } from '../../models/response/shift-data-response';
import { ActivityService } from '../../services/activity/activity.service';

@Component({
  selector: 'app-working-shift',
  templateUrl: './working-shift.component.html',
  styleUrls: ['./working-shift.component.css']
})
export class WorkingShiftComponent implements OnInit {

  auth: AuthenticatedUser | void = new AuthenticatedUser({});
  isAdmin: boolean = false;
  employeeId: string = "";
  shiftData: Array<ShiftDataResponse> = new Array<ShiftDataResponse>();
  constructor(private activityService: ActivityService,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) {
    this.auth = this.authenticationService.getAuth();
    if (this.auth) {
      this.isAdmin = this.auth.IsAdmin;
      this.employeeId = this.auth.employeeId;
    }
  }

  ngOnInit() {
    this.getShiftData();
  }

  getShiftData() {
    if (this.isAdmin) {
      this.activityService.getShiftData().subscribe((res: BaseResponse<Array<ShiftDataResponse>>) => {
        this.assignShiftData(res.data);
      });
    }
    else {
      this.activityService.getShiftData(this.employeeId).subscribe((res: BaseResponse<Array<ShiftDataResponse>>) => {
        this.assignShiftData(res.data);
      });
    }
  }

  assignShiftData(arr: Array<ShiftDataResponse>) {
    this.shiftData = arr;
  }

  onStartShift() {
    this.activityService.startShift().subscribe((res: BaseResponse<ShiftDataResponse>) => {
      this.alertService.success(res.message, () => {
        this.shiftData.push(res.data);
      });
    });
  }

  onStartBreak(id: number) {
    this.activityService.startBreak(this.generateRequestModel(id)).subscribe((res: BaseResponse<ShiftDataResponse>) => {
      this.alertService.success(res.message, () => {
        var data = res.data;
        this.shiftData.find(obj => obj.id == data.id)!.breakStartTime = data.breakStartTime;
      });
    });
  }

  onEndBreak(id: number) {
    this.activityService.endBreak(this.generateRequestModel(id)).subscribe((res: BaseResponse<ShiftDataResponse>) => {
      this.alertService.success(res.message, () => {
        var data = res.data;
        this.shiftData.find(obj => obj.id == data.id)!.breakEndTime = data.breakEndTime;
      });
    });
  }

  onStartLunch(id: number) {
    this.activityService.startLunch(this.generateRequestModel(id)).subscribe((res: BaseResponse<ShiftDataResponse>) => {
      this.alertService.success(res.message, () => {
        var data = res.data;
        this.shiftData.find(obj => obj.id == data.id)!.lunchStartTime = data.lunchStartTime;
      });
    });
  }

  onEndLunch(id: number) {
    this.activityService.endLunch(this.generateRequestModel(id)).subscribe((res: BaseResponse<ShiftDataResponse>) => {
      this.alertService.success(res.message, () => {
        var data = res.data;
        this.shiftData.find(obj => obj.id == data.id)!.lunchEndTime = data.lunchEndTime;
      });
    });
  }

  onEndShift(id: number) {
    this.activityService.endShift(this.generateRequestModel(id)).subscribe((res: BaseResponse<ShiftDataResponse>) => {
      this.alertService.success(res.message, () => {
        var data = res.data;
        this.shiftData.find(obj => obj.id == data.id)!.workShiftEndTime = data.workShiftEndTime;
      });
    });
  }

  generateRequestModel(_shiftId: number) {
    return new ShiftDataRequest({
      shiftId : _shiftId
    });
  }
}
