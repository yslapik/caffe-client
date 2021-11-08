import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Positions} from "../../../../models";

@Component({
  selector: 'order-dashboard-item',
  templateUrl: './order-dashboard-item.component.html',
  styleUrls: ['./order-dashboard-item.component.scss']
})
export class OrderDashboardItemComponent implements OnInit {

  @Input()
  positionItem?: Positions;

  @Output()
  addClick = new EventEmitter<void>();

  onOrderListItemClick(orderItem?: Positions) {
    this.addClick.emit();
  }
  @Output()
  removeClick = new EventEmitter<void>();

  onOrderListItemRemoveClick(orderItem?: Positions) {
    this.removeClick.emit();
  }
  @Output()
  removeAllClick = new EventEmitter<void>();

  onOrderListItemRemoveAllClick(orderItem?: Positions) {
    this.removeAllClick.emit();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
