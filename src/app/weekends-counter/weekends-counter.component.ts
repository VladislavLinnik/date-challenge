import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'weekends-counter',
  templateUrl: './weekends-counter.component.html',
  styleUrls: ['./weekends-counter.component.scss']
})
export class WeekendsCounterComponent implements OnInit {
  date: string;
  holidays: number;

  constructor() { }

  ngOnInit() {
  }

  calculateWeekends(): void {
    this.holidays = 0;
    const date: Date = new Date(this.date);
    const month: number = date.getMonth();
    const year: number = date.getFullYear();
    const daysInMonth: number = new Date(year, month, 0).getDate();
    for (let i = 1; i <= daysInMonth; i++) {
      if (this.isWeekend(year, month, i)) {
        this.holidays++;
      }
    }
  }

  private isWeekend(year, month, day): boolean {
    const weekDay = new Date(year, month, day).getDay();
    return weekDay === 0 || weekDay === 6;
  }
}
