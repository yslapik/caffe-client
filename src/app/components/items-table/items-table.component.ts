import {Component, Input, OnInit} from '@angular/core';

import {ModelDataSource} from "../../ModelDataSource";
import {RestDataLoaderService} from "../../services/rest-data-loader.service";
import {TableItem} from "../../../models";

@Component({
  selector: 'items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.scss']
})

export class ItemsTableComponent implements OnInit {
  @Input()
  tableItem!: TableItem;
  displayedColumns!:string[];
  dataSource!: ModelDataSource
  constructor(private dataService: RestDataLoaderService) {}

  valueChange(record: any) {
    let parsedCount = parseInt(record.count);
    record.dailyAmount += isNaN(parsedCount)? 0: parsedCount;
    record.sum += (record.count * record.price);
    record.count = 0;
  }

  ngOnInit() {
    this.displayedColumns = this.tableItem.displayColumns.map(c => c.name);
    this.displayedColumns.push('menu');
    this.dataSource = new ModelDataSource(this.dataService);
    this.dataSource.loadData();
  }
}
