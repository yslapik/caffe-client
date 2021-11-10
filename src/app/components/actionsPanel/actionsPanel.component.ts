import {Component, Input, OnInit} from '@angular/core';
import {MatTable} from "@angular/material/table";
import {ModelDataSource} from "../../ModelDataSource";

@Component({
  selector: 'actionspanel',
  templateUrl: './actionsPanel.component.html',
  styleUrls: ['./actionsPanel.component.scss']
})
export class ActionsPanelComponent implements OnInit {

  @Input()
  table!:MatTable<any>;

  addItemClick() {
    (this.table.dataSource as ModelDataSource).appendData({});
  }

  saveItemsClick(){
    (this.table.dataSource as ModelDataSource).saveData();
  }
  constructor() { }
  ngOnInit(): void {

  }

}
