import {Component} from '@angular/core';

import {MatTableDataSource} from "@angular/material/table";
import {Position} from "../../../models";



@Component({
  selector: 'items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.scss']
})

export class ItemsTableComponent {
  displayedColumns = ['name', 'price', 'count', 'dailyAmount', 'sum', 'menu'];
  dataSource = new MatTableDataSource(initialData);

  valuechange(record: any) {
    let parsedCount = parseInt(record.count);
    record.dailyAmount += isNaN(parsedCount)? 0: parsedCount ;
    record.sum += (record.count * record.price);
  }
}

const initialData: Position[] = [
  {id: '1', name: 'Espresso', price: 12.50,count:0, dailyAmount:0, sum:0},
  {id: '2', name: 'Americano', price: 12.50,count:0, dailyAmount:0, sum:0},
  {id: '3', name: 'Latte', price: 18,count:0, dailyAmount:0, sum:0},
];
