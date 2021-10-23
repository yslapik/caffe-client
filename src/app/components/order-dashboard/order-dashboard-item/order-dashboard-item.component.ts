import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Position} from "../../../../models";

@Component({
  selector: 'order-dashboard-item',
  templateUrl: './order-dashboard-item.component.html',
  styleUrls: ['./order-dashboard-item.component.scss']
})
export class OrderDashboardItemComponent implements OnInit {

  @Input()
  positionItem?: Position;

  @Output()
  addClick = new EventEmitter<void>();

  onOrderListItemClick(orderItem?: Position) {
    this.addClick.emit();
  }
  @Output()
  removeClick = new EventEmitter<void>();

  onOrderListItemRemoveClick(orderItem?: Position) {
    this.removeClick.emit();
  }
  @Output()
  removeAllClick = new EventEmitter<void>();

  onOrderListItemRemoveAllClick(orderItem?: Position) {
    this.removeAllClick.emit();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
