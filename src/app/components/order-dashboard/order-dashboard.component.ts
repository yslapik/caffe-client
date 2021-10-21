import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Position} from "../../../models";

@Component({
  selector: 'order-dashboard',
  templateUrl: './order-dashboard.component.html',
  styleUrls: ['./order-dashboard.component.scss']
})
export class OrderDashboardComponent implements OnInit {
  @Input()
  orderItems: Position[] = [];

  @Output()
  click = new EventEmitter<Position>();

  onOrderListItemClick(orderItem: Position) {
    this.click.emit(orderItem);
  }

  ngOnInit(): void {
  }
}
