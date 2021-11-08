import {ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {OrderItems} from "../../../models";
import {MatTable} from "@angular/material/table";

@Component({
  selector: 'order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent implements DoCheck {

 @Input()
 currentOrderPositions!: OrderItems[];
  displayedColumns = ['positionName', 'priceTotal', 'orderAmount'];
  constructor() { }

  @ViewChild('table') table!: MatTable<OrderItems>;

  ngDoCheck(): void {
    this.table?.renderRows();
  }
}
