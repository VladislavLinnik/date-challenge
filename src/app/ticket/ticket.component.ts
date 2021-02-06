import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  concertDate: string;
  buyDate: Date;
  returnDate: Date;

  constructor() { }

  ngOnInit() {
  }

  calculateTicket(): void {
    const date = new Date(this.concertDate);
    this.buyDate = new Date(new Date(date.getTime() - (1000 * 60 * 60 * 24 * 30)).toLocaleDateString());
    this.returnDate = new Date(new Date(date.getTime() - (1000 * 60 * 60 * 24 * 7)).toLocaleDateString());
  }
}
