import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-personal',
  templateUrl: './notification-personal.component.html',
  styleUrls: ['./notification-personal.component.css']
})
export class NotificationPersonalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  options: string[] = ['Adnan', 'Kunal', 'Bunty'];


}
