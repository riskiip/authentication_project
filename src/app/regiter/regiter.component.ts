import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regiter',
  templateUrl: './regiter.component.html',
  styleUrls: ['./regiter.component.scss']
})
export class RegiterComponent implements OnInit {

  constructor() { }

  genderValues = [
    {name: 'Laki-laki', value: 'male'},
    {name: 'Perempuan', value: 'female'}
  ]

  ngOnInit(): void {
  }

}
