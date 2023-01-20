import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BehaviorSubjectService } from './core/helpers/behviour-subject.service';
import { AuthenticationService } from './core/services/authenticationService/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items!: MenuItem[];
  isAuthenticated!: boolean;
  title = 'time_clock_ui';

  constructor(private behaviorSubjectService: BehaviorSubjectService) {
  }

  ngOnInit() {
    this.behaviorSubjectService.getIsAuthenticated().subscribe((_isAuthenticated: boolean) => {
      this.isAuthenticated = _isAuthenticated;
    });
    this.menuItems();
  }

  menuItems() {
    this.items = [
      {
        label: 'Working Shift',
        icon: 'pi pi-pw pi-file',
        routerLink: ['secure/activity/workingshift']
      },
      {
        label: 'Report',
        icon: 'pi pi-fw pi-pencil',
        routerLink: ['secure/activity/report']
      }
    ];
  }
}
