import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../shared/auth.service";
import {Login} from "../model/login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginData: Login = {
    email: '',
    password: '',
    data: {
      status: '',
      authToken: ''
    }
  }

  constructor(private router: Router,
              private auth: AuthService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.loginData = {
        email: this.loginForm.get('email')?.value,
        password: this.loginForm.get('password')?.value
      }
      console.log(this.loginData)
      this.auth.login(this.loginData).subscribe((data) => {
        if (data.data?.authToken !== null) {
          console.log(data.data?.authToken);
          // @ts-ignore
          localStorage.setItem('token', data.data?.authToken)
          this.router.navigate(['dashboard']);
        }
      })

    } else {

    }
  }

}
