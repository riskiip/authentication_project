import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../shared/auth.service";
import {Signup} from "../model/signup";
import {Router} from "@angular/router";

@Component({
  selector: 'app-regiter',
  templateUrl: './regiter.component.html',
  styleUrls: ['./regiter.component.scss']
})
export class RegiterComponent implements OnInit {
  @ViewChild('confirmPassword', {static: false}) confirmPassword: ElementRef | undefined;

  genderValues = [
    {name: 'Laki-laki', value: 'male'},
    {name: 'Perempuan', value: 'female'}
  ];

  registerData: Signup = {
    username: '',
    email: '',
    password: '',
    gender: '',
    dob: ''
  }

  userRegistrationForm: FormGroup;

  constructor(private auth: AuthService,
              private router: Router) {
    this.userRegistrationForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      gender: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.userRegistrationForm.valid && this.userRegistrationForm.value.password === this.confirmPassword?.nativeElement.value) {
      this.registerData = {
        username: this.userRegistrationForm.get('username')?.value,
        email: this.userRegistrationForm.get('email')?.value,
        password: this.userRegistrationForm.get('password')?.value,
        gender: this.userRegistrationForm.get('gender')?.value,
        dob: this.userRegistrationForm.get('dob')?.value
      }

      this.auth.signup(this.registerData).subscribe((data) => {
        if (data) {
          console.log(data)
          console.log("registration complete " + data);
          this.router.navigate(['/login'])
        }
      })
    } else {
      console.log('Password tidak sama')
    }
  }

  onResetClick() {
    this.userRegistrationForm.reset();
    this.confirmPassword?.nativeElement.value.set('');
    console.log(this.confirmPassword?.nativeElement.value)
  }

}
