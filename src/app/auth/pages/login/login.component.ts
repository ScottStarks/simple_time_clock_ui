import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticatedUser } from 'src/app/core/models/authenticated-user';
import { AuthenticationService } from 'src/app/core/services/authenticationService/authentication.service';
import { LoginRequest } from '../../models/request/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm!: FormGroup;
  isSubmitted = false;

  constructor(private formBuilder: FormBuilder, 
    private authenticationService: AuthenticationService,
    private router: Router) {
  }

  ngOnInit() {
    this.LoginForm = this.formBuilder.group({
      employeeId: ["", [Validators.required]],
    });
  }

  get f() { return this.LoginForm.controls; }

  onLogin() {
    this.isSubmitted = true;
    if (this.LoginForm.valid) {
      let reqModel = new LoginRequest({
        employeeId : this.f['employeeId'].value
      });
      this.authenticationService.login(reqModel).subscribe((data: AuthenticatedUser) => {
        if (data) {
          this.router.navigateByUrl('/secure/activity/workingshift');
        }
      });
    }
  }
}
