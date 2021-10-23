import {Component, Input, OnInit} from '@angular/core';
import {OrderItem} from "../../../models";

@Component({
  selector: 'order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent implements OnInit {

 @Input()
 currentOrderPositions!: OrderItem[]
  displayedColumns = ['positionName', 'priceTotal', 'orderAmount'];
  constructor() { }

  ngOnInit(): void {
  }

}
