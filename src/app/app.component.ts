import {Component} from '@angular/core';
import {Position} from "../models/Position";
import {MatTableDataSource} from "@angular/material/table";
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  displayedColumns = ['name', 'price', 'count'];
  dataSource = new MatTableDataSource(initialData);
}

const initialData: Position[] = [
  {name: 'Espresso', price: 12.50,count:0},
  {name: 'Americano', price: 12.50,count:0},
  {name: 'Latte', price: 18,count:0},
];
