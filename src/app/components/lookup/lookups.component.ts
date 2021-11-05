import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'lookups',
  templateUrl: './lookups.component.html',
  styleUrls: ['./lookups.component.scss']
})
export class LookupsComponent implements OnInit {
  lookupTemplateList = environment.lookupTemplateList;
  constructor() { }

  ngOnInit(): void {
  }

}
