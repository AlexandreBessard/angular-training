import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Alex", "Bessard", "alex@alex.com", 12155),
    new SalesPerson("Toto", "Test", "toto@alex.com", 54745),
    new SalesPerson("Jeanne", "Lebuche", "Jean@alex.com", 44775),
    new SalesPerson("Sii", "ssdo", "sii@alex.com", 54575)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
