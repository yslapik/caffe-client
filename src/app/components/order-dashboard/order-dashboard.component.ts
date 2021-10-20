import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OrderItem} from "../../../models";
import {coerceNumberProperty} from "@angular/cdk/coercion";

@Component({
  selector: 'order-dashboard',
  templateUrl: './order-dashboard.component.html',
  styleUrls: ['./order-dashboard.component.scss']
})
export class OrderDashboardComponent implements OnInit {
  @Input()
  orderItems: OrderItem[] = [];

  @Output()
  click = new EventEmitter<OrderItem>();

  onOrderListItemClick(orderItem: OrderItem) {
    this.click.emit(orderItem);
  }

  ngOnInit(): void {
  }
}
