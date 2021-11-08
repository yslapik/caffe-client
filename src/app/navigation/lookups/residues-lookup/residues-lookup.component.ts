import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'residues-lookup',
  templateUrl: './residues-lookup.component.html',
  styleUrls: ['./residues-lookup.component.scss']
})
export class ResiduesLookupComponent implements OnInit {
  template =  environment.tableTemplate.residuesLookup
  constructor() { }

  ngOnInit(): void {
  }

}
