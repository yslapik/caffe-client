import {Component, Input, OnInit} from '@angular/core';

import {ModelDataSource} from "../../ModelDataSource";
import {RestDataLoaderService} from "../../services/rest-data-loader.service";
import {TableTemplate} from "../../../models";

@Component({
  selector: 'items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.scss']
})

export class ItemsTableComponent implements OnInit {
  @Input()
  tableItem!: TableTemplate;
  displayedColumns!:string[];
  dataSource!: ModelDataSource
  constructor(private dataService: RestDataLoaderService) {}

  valueChange(record: any) {
    //TODO переделать(попробовать на observable и подписываться на компоненте модели)
    if(this.tableItem.modelName === 'sales'){
      let parsedCount = parseInt(record.count);
      record.dailyAmount += isNaN(parsedCount)? 0: parsedCount;
      record.sum += (record.count * record.price);
      record.count = 0;
    }
  }

  deleteRecord(record: any){
    this.dataSource.removeData(record);
  }

  save(){
    this.dataSource.saveData();
  }

  ngOnInit() {
    this.displayedColumns = this.tableItem.displayColumns.map(c => c.name);
    this.displayedColumns.push('delete');
    this.dataSource = new ModelDataSource(this.dataService);
    this.dataSource.modelName = this.tableItem.modelName;
    this.dataSource.loadData(this.tableItem);
  }
}
