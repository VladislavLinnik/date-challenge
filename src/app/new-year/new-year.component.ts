import { Component, OnInit } from '@angular/core';
import {interval} from 'rxjs';

@Component({
  selector: 'new-year',
  templateUrl: './new-year.component.html',
  styleUrls: ['./new-year.component.scss']
})
export class NewYearComponent implements OnInit {
  startedDate: Date;
  newYearDate = new Date(new Date().getFullYear() + 1, 0, 0, 23, 59, 59);
  timeLeft: string;

  constructor() { }

  ngOnInit() {
    interval(1000).subscribe(() => {
      if (this.startedDate) {
        this.startedDate = new Date(new Date(this.startedDate).setSeconds(new Date(this.startedDate).getSeconds() + 1));
        const days = Math.trunc((new Date(this.newYearDate).getTime() - this.startedDate.getTime()) / (24 * 3600.25 * 1000));
        const hours = Math.trunc((new Date(this.newYearDate).getTime() - this.startedDate.getTime()) / (3600.25 * 1000));
        const minutes = Math.trunc((new Date(this.newYearDate).getTime() - this.startedDate.getTime()) / (3600.25 * 1000 /  60));
        const seconds = (new Date(this.newYearDate).getTime() - this.startedDate.getTime()).toString().slice(0, -3);
        this.timeLeft = `Дней - ${days}, Часов - ${hours}, Минут - ${minutes}, Секунд - ${seconds}`;
      }
    });
  }
}
