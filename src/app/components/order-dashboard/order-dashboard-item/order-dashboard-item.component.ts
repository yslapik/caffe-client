import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OrderItem} from "../../../../models";

@Component({
  selector: 'order-dashboard-item',
  templateUrl: './order-dashboard-item.component.html',
  styleUrls: ['./order-dashboard-item.component.scss']
})
export class OrderDashboardItemComponent implements OnInit {

  @Input()
  orderItem?: OrderItem;

  @Output()
  click = new EventEmitter<void>();

  onOrderListItemClick(orderItem?: OrderItem) {
    this.click.emit();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
