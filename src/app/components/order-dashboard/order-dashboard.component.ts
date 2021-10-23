import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OrderItem, Position} from "../../../models";

@Component({
  selector: 'order-dashboard',
  templateUrl: './order-dashboard.component.html',
  styleUrls: ['./order-dashboard.component.scss']
})
export class OrderDashboardComponent implements OnInit {
  @Input()
  displayPositions: Position[] = [];
  @Input()
  currentOrderPositions!: OrderItem[]

  @Output()
  click = new EventEmitter<Position>();

  onOrderListItemAdd(orderItem: Position) {
    let existingOrderItem = this.currentOrderPositions.find(x => x.positionName == orderItem.name);
    if(existingOrderItem){
      let index : number = this.currentOrderPositions.indexOf(existingOrderItem, 0)!;
      this.currentOrderPositions[index].orderAmount +=1;
      this.currentOrderPositions[index].priceTotal += orderItem.price;
    }
    else{
      let newOrderItem = {
        id:"",
        positionName :orderItem.name,
        positionId: orderItem.id,
        orderAmount: 1,
        priceTotal:orderItem.price
      }
      this.currentOrderPositions.push(newOrderItem);
    }
  }

  onOrderListItemRemove(orderItem: Position) {
    let existingOrderItem = this.currentOrderPositions.find(x => x.positionName == orderItem.name);
    if(existingOrderItem){
      let index : number = this.currentOrderPositions.indexOf(existingOrderItem, 0)!;
      let orderPosition = this.currentOrderPositions[index];
      if (orderPosition.orderAmount == 1)
      {
        this.currentOrderPositions.splice(index, 1);
        return;
      }
      if(orderPosition.orderAmount > 0){
        orderPosition.orderAmount -=1;
        orderPosition.priceTotal -= orderItem.price;
      }
    }
  }

  onOrderListItemRemoveAll(orderItem: Position) {
    let existingOrderItem = this.currentOrderPositions.find(x => x.positionName == orderItem.name);
    if(existingOrderItem){
      let index :number = this.currentOrderPositions.indexOf(existingOrderItem, 0)!;
      if (index > -1) {
        this.currentOrderPositions.splice(index, 1);
      }
    }
  }
  ngOnInit(): void {
  }
}
