import {Component, OnInit} from '@angular/core';

import {ModelDataSource} from "../../ModelDataSource";
import {RestDataLoaderService} from "../../services/rest-data-loader.service";
import {TableItem} from "../../../models";

@Component({
  selector: 'items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.scss']
})

export class ItemsTableComponent implements OnInit {
  tableItem!: TableItem;
  //displayedColumns = ['name', 'price', 'count', 'dailyAmount', 'sum', 'menu'];
  dataSource!: ModelDataSource
  constructor(private dataService: RestDataLoaderService) {}

  valuechange(record: any) {
    let parsedCount = parseInt(record.count);
    record.dailyAmount += isNaN(parsedCount)? 0: parsedCount ;
    record.sum += (record.count * record.price);
  }

  ngOnInit() {
    this.dataSource = new ModelDataSource(this.dataService);
    this.dataSource.loadData();
  }
}
