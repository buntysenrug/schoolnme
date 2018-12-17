import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-access-logs',
  templateUrl: './access-logs.component.html',
  styleUrls: ['./access-logs.component.css']
})
export class AccessLogsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns = ['srNo', 'name', 'standard', 'division','time'];
  dataSource = ELEMENT_DATA;


}

export interface PeriodicElement {
  srNo:number;
  name: string;
  standard: string;
  division: string;
  time:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {srNo: 1, name: 'Adnan Hassan', standard: 'I', division: 'H',time:'08:30 AM'},
  {srNo: 2, name: 'Adnan Hassan', standard: 'I', division: 'H',time:'08:30 AM'},
  {srNo: 3, name: 'Adnan Hassan', standard: 'I', division: 'H',time:'08:30 AM'},
  {srNo: 4, name: 'Adnan Hassan', standard: 'I', division: 'H',time:'08:30 AM'},
  {srNo: 5, name: 'Adnan Hassan', standard: 'I', division: 'H',time:'08:30 AM'},
  {srNo: 6, name: 'Adnan Hassan', standard: 'I', division: 'H',time:'08:30 AM'},
  {srNo: 7, name: 'Adnan Hassan', standard: 'I', division: 'H',time:'08:30 AM'},
  {srNo: 8, name: 'Adnan Hassan', standard: 'I', division: 'H',time:'08:30 AM'},
  {srNo: 9, name: 'Adnan Hassan', standard: 'I', division: 'H',time:'08:30 AM'}
];
