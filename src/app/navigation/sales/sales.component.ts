import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  tableItem = {
    modelName: 'sales',
    caption:'Продажи',
    displayColumns:[
      {
        name:'name',
        header:'Позиция'
      },
      {
        name:'price',
        header:'Цена'
      },
      {
        name:'count',
        header:'Продано',
        isEditable:true
      },
      {
        name:'dailyAmount',
        header:'Продаж за день'
      },
      {
        name:'sum',
        header:'Общая сумма'
      }
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
