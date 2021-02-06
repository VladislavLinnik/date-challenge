import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'difference-between',
  templateUrl: './difference-between.component.html',
  styleUrls: ['./difference-between.component.scss']
})
export class DifferenceBetweenComponent implements OnInit {
  startDate: Date;
  endDate: Date;
  daysDifference: number;
  errorMsg: string;

  constructor() { }

  ngOnInit() {
  }

  calculateDaysDifference() {
    if (this.startDate && this.endDate) {
      if (new Date(this.startDate) < new Date(this.endDate) && new Date(this.startDate).getTime() !== new Date(this.endDate).getTime()) {
        this.daysDifference = (new Date(this.endDate).getTime() - new Date(this.startDate).getTime()) / (1000 * 60 * 60 * 24);
        this.errorMsg = '';
      } else {
        this.daysDifference = null;
        this.errorMsg = 'Конечная дата должна быть больше начальной!';
      }
    } else {
      this.daysDifference = null;
    }
  }
}
