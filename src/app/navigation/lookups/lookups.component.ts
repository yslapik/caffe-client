import { Component, OnInit } from '@angular/core';
import {TableItem} from "../../../models";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'lookups',
  templateUrl: './lookups.component.html',
  styleUrls: ['./lookups.component.scss']
})
export class LookupsComponent implements OnInit {
  lookupItems: TableItem[] = environment.lookupEditList;

  constructor() { }

  ngOnInit(): void {
  }

}
