import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRoutingModule } from './activity-routing.module';
import { WorkingShiftComponent } from './pages/working-shift/working-shift.component';
import { ReportComponent } from './pages/report/report.component';


@NgModule({
  declarations: [
    WorkingShiftComponent,
    ReportComponent
  ],
  imports: [
    CommonModule,
    ActivityRoutingModule
  ]
})
export class ActivityModule { }
