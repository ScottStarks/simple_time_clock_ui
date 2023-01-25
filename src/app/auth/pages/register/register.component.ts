import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseResponse } from 'src/app/core/models/base-response';
import { AlertService } from 'src/app/core/services/alertService/alert.service';
import { AuthenticationService } from 'src/app/core/services/authenticationService/authentication.service';
import { RegisterRequest } from '../../models/request/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  isSubmitted: boolean = false;

  constructor(private authenticationService: AuthenticationService,
    private router: Router,
    private alertService: AlertService) {
  }

  ngOnInit() {
    this.setFormConfiguration();
  }

  setFormConfiguration() {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onRegister() {
    this.isSubmitted = true;
    if (this.registerForm.valid) {
      var reqModel = new RegisterRequest({
        name : this.f['name'].value,
        email: this.f['email'].value
      });
      this.authenticationService.register(reqModel).subscribe((response: BaseResponse<any>) => {
        this.alertService.success(response.message, () => {
          this.router.navigateByUrl('/auth/login');
        });
      });
    }
  }
}
