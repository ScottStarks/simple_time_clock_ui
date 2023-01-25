import { Component, OnInit } from '@angular/core';
import { ActivationStart, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { BehaviorSubjectService } from './core/helpers/behviour-subject.service';
import { AuthenticatedUser } from './core/models/authenticated-user';
import { AuthenticationService } from './core/services/authenticationService/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items!: MenuItem[];
  isAuthenticated!: boolean;
  isAdmin!: boolean;
  authenticatedUser!: AuthenticatedUser | void;
  constructor(private behaviorSubjectService: BehaviorSubjectService,
    private authenticationService: AuthenticationService,
    private router: Router) {
    this.router.events.subscribe(value => {
      if (value instanceof NavigationEnd) {
        var navigatingTo = this.router.url;
        if (navigatingTo == "/" || navigatingTo == "/auth/login" || navigatingTo == "/auth/register") {
          this.clearTokenFromLocalStorage();
        }
      }
      // if (value instanceof NavigationStart) {
      //   var navigatingTo = this.router.url;
      //   if (navigatingTo == "/" || navigatingTo == "/auth/login" || navigatingTo == "/auth/register") {
      //     this.clearTokenFromLocalStorage();
      //   }
      // }
    });
  }

  ngOnInit() {
    this.behaviorSubjectService.getIsAuthenticated().subscribe(() => {
      this.getAuthenticatedUser();
    });
    this.menuItems();
  }

  onLogout() {
    this.authenticationService.logout();
    this.router.navigateByUrl("/auth/login");
    this.isAuthenticated = false;
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
        routerLink: ['secure/activity/report'],
        visible: this.isAdmin
      }
    ];
  }

  clearTokenFromLocalStorage() {
    if (this.authenticationService.isAuthenticated) {
      this.authenticationService.logout();
    }
  }

  getAuthenticatedUser() {
    this.isAuthenticated = this.authenticationService.isAuthenticated;
    var authenticatedUser = this.authenticationService.getAuth();
    if (authenticatedUser) {
      this.isAdmin = authenticatedUser.IsAdmin;
    }
  }

}
