import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-class',
  templateUrl: './notification-class.component.html',
  styleUrls: ['./notification-class.component.css']
})
export class NotificationClassComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  StandardList: string[] = ['I', 'II', 'III', 'IV', 'V', 'Nursery'];

  DivisionList: string[] = ['A', 'B', 'C'];
}
