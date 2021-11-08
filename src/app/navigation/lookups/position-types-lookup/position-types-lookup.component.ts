import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'position-types-lookup',
  templateUrl: './position-types-lookup.component.html',
  styleUrls: ['./position-types-lookup.component.scss']
})
export class PositionTypesLookupComponent implements OnInit {
  template =  environment.tableTemplate.positionTypesLookup
  constructor() { }

  ngOnInit(): void {
  }

}
