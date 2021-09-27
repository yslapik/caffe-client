import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  menuItems:any[] = [
  {
    name:'sales',
    caption:'Продажи',
  },
  {
    name:'statistics',
    caption:'Статистика',
  },
  {
    name:'change',
    caption:'Смены',
  }
  ]

  constructor() { }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  ngOnInit(): void {
  }

}
