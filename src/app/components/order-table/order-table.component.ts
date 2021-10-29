import {ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {OrderItem} from "../../../models";
import {MatTable} from "@angular/material/table";

@Component({
  selector: 'order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent implements DoCheck {

 @Input()
 currentOrderPositions!: OrderItem[];
  displayedColumns = ['positionName', 'priceTotal', 'orderAmount'];
  constructor() { }

  @ViewChild('table') table!: MatTable<OrderItem>;

  ngDoCheck(): void {
    this.table?.renderRows();
  }
}
