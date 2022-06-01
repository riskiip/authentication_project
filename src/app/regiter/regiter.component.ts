import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

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

  userRegistrationForm: FormGroup;

  constructor() {
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
      console.log(this.userRegistrationForm.value)
    } else {
      console.log('Password tidak sama')
    }
  }

}
