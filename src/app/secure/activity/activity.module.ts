import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRoutingModule } from './activity-routing.module';
import { WorkingShiftComponent } from './pages/working-shift/working-shift.component';
import { ReportComponent } from './pages/report/report.component';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [
    WorkingShiftComponent,
    ReportComponent
  ],
  imports: [
    CommonModule,
    ActivityRoutingModule,
    TableModule
  ]
})
export class ActivityModule { }
