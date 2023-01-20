import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportComponent } from './pages/report/report.component';
import { WorkingShiftComponent } from './pages/working-shift/working-shift.component';

const routes: Routes = [
  { path: '', redirectTo: 'workingshift', pathMatch: 'full' },
  { path: 'workingshift', component: WorkingShiftComponent },
  { path: 'report', component: ReportComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityRoutingModule { }
