import {Component, Input, Output, ViewChild} from '@angular/core';
import {Positions, OrderItems} from "../../../models";
import {MatTable} from "@angular/material/table";

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  @Input()
  OrdersMock: Positions[] = [
    {
      id:'1e4rd',
      src: 'https://picsum.photos/200',
      name: 'Espresso',
      price:666
    },  {
      id:'1e4rc',
      src: 'https://picsum.photos/200',
      name: 'Americano',
      price:76868768
    },
    {
      id:'1e4re',
      src: 'https://picsum.photos/200',
      name: 'Espresso',
      price:22
    },  {
      id:'1e4rf',
      src: 'https://picsum.photos/200',
      name: 'Americano',
      price:30
    },  {
      id:'1e4rg',
      src: 'https://picsum.photos/200',
      name: 'Espresso',
      price:12.50
    },  {
      id:'1e4rt',
      src: 'https://picsum.photos/200',
      name: 'Americano',
      price:123
    },
    {
      id:'1e4rs',
      src: 'https://picsum.photos/200',
      name: 'Espresso',
      price:12
    }
  ];
  positions:Positions[] = this.OrdersMock;

  @Output()
  positionsInOrder: OrderItems[] = [];
}
