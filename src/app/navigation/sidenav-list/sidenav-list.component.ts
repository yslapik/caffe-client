import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { environment } from '../../../environments/environment';
import {SideNavListItem} from "../../../models";


@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  sidenavList: SideNavListItem[] = environment.sidenavList;

  constructor() { }

  ngOnInit() {

  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

}
