import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'date-of-birth',
  templateUrl: './date-of-birth.component.html',
  styleUrls: ['./date-of-birth.component.scss']
})
export class DateOfBirthComponent implements OnInit {
  birthDate: string;
  age: string;

  constructor() { }

  ngOnInit() {
  }

  calculateAge(): void {
    if (new Date(this.birthDate).getTime() > new Date().getTime()) {
      this.age = 'Вы ещё не родились';
    } else {
      if (this.birthDate) {
        this.age = Math.trunc((new Date(new Date().toLocaleDateString()).getTime() -
          new Date(this.birthDate).getTime()) / (24 * 3600 * 365.25 * 1000)).toString();
      } else {
        this.age = null;
      }
    }
  }
}
