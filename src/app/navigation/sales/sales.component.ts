import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  tableItem = environment.tableTemplate.salesTemplate
  constructor() { }

  ngOnInit(): void {
  }

}
