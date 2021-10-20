import {Component, Input} from '@angular/core';
import {OrderItem} from "../../../models";




@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  @Input()
  OrdersMock: OrderItem[] = [
    {
      src: 'https://picsum.photos/200',
      caption: 'Espresso',
      amount:0
    },  {
      src: 'https://picsum.photos/200',
      caption: 'Americano',
      amount:0
    },
    {
      src: 'https://picsum.photos/200',
      caption: 'Espresso',
      amount:0
    },  {
      src: 'https://picsum.photos/200',
      caption: 'Americano',
      amount:0
    },  {
      src: 'https://picsum.photos/200',
      caption: 'Espresso',
      amount:0
    },  {
      src: 'https://picsum.photos/200',
      caption: 'Americano',
      amount:0
    },
    {
      src: 'https://picsum.photos/200',
      caption: 'Espresso',
      amount:0
    },  {
      src: 'https://picsum.photos/200',
      caption: 'Americano',
      amount:0
    },  {
      src: 'https://picsum.photos/200',
      caption: 'Espresso',
      amount:0
    },  {
      src: 'https://picsum.photos/200',
      caption: 'Americano',
      amount:0
    },
    {
      src: 'https://picsum.photos/200',
      caption: 'Espresso',
      amount:0
    },  {
      src: 'https://picsum.photos/200',
      caption: 'Americano',
      amount:0
    },  {
      src: 'https://picsum.photos/200',
      caption: 'Espresso',
      amount:0
    },  {
      src: 'https://picsum.photos/200',
      caption: 'Americano',
      amount:0
    },
    {
      src: 'https://picsum.photos/200',
      caption: 'Espresso',
      amount:0
    },  {
      src: 'https://picsum.photos/200',
      caption: 'Americano',
      amount:0
    },  {
      src: 'https://picsum.photos/200',
      caption: 'Espresso',
      amount:0
    },  {
      src: 'https://picsum.photos/200',
      caption: 'Americano',
      amount:0
    },
    {
      src: 'https://picsum.photos/200',
      caption: 'Espresso',
      amount:0
    },  {
      src: 'https://picsum.photos/200',
      caption: 'Americano',
      amount:0
    },  {
      src: 'https://picsum.photos/200',
      caption: 'Espresso',
      amount:0
    },  {
      src: 'https://picsum.photos/200',
      caption: 'Americano',
      amount:0
    },
    {
      src: 'https://picsum.photos/200',
      caption: 'Espresso',
      amount:0
    },  {
      src: 'https://picsum.photos/200',
      caption: 'Americano',
      amount:0
    },  {
      src: 'https://picsum.photos/200',
      caption: 'Espresso',
      amount:0
    },  {
      src: 'https://picsum.photos/200',
      caption: 'Americano',
      amount:0
    },
    {
      src: 'https://picsum.photos/200',
      caption: 'Espresso',
      amount:0
    },  {
      src: 'https://picsum.photos/200',
      caption: 'Americano',
      amount:0
    },  {
      src: 'https://picsum.photos/200',
      caption: 'Espresso',
      amount:0
    },  {
      src: 'https://picsum.photos/200',
      caption: 'Americano',
      amount:0
    },
    {
      src: 'https://picsum.photos/200',
      caption: 'Espresso',
      amount:0
    },  {
      src: 'https://picsum.photos/200',
      caption: 'Americano',
      amount:0
    },  {
      src: 'https://picsum.photos/200',
      caption: 'Espresso',
      amount:0
    },  {
      src: 'https://picsum.photos/200',
      caption: 'Americano',
      amount:0
    },
    {
      src: 'https://picsum.photos/200',
      caption: 'Espresso',
      amount:0
    },  {
      src: 'https://picsum.photos/200',
      caption: 'Americano',
      amount:0
    },  {
      src: 'https://picsum.photos/200',
      caption: 'Espresso',
      amount:0
    },  {
      src: 'https://picsum.photos/200',
      caption: 'Americano',
      amount:0
    },
    {
      src: 'https://picsum.photos/200',
      caption: 'Espresso',
      amount:0
    },  {
      src: 'https://picsum.photos/200',
      caption: 'Americano',
      amount:0
    },  {
      src: 'https://picsum.photos/200',
      caption: 'Espresso',
      amount:0
    },  {
      src: 'https://picsum.photos/200',
      caption: 'Americano',
      amount:0
    },
    {
      src: 'https://picsum.photos/200',
      caption: 'Espresso',
      amount:0
    },  {
      src: 'https://picsum.photos/200',
      caption: 'Americano',
      amount:0
    },
  ];
  orders:OrderItem[] = this.OrdersMock;
}
