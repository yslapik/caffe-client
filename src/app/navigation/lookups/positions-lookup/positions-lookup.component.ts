import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'positions-lookup',
  templateUrl: './positions-lookup.component.html',
  styleUrls: ['./positions-lookup.component.scss']
})
export class PositionsLookupComponent implements OnInit {
  template =  environment.tableTemplate.positionsLookup
  constructor() { }

  ngOnInit(): void {
  }

}
