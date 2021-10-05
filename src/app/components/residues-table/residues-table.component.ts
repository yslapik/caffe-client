import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Residue} from "../../../models/residue";

@Component({
  selector: 'residues-table',
  templateUrl: './residues-table.component.html',
  styleUrls: ['./residues-table.component.scss']
})
export class ResiduesTableComponent {
  displayedColumns = ['name', 'purchaseDate', 'totalAmount', 'leftAmount', 'usedAmount', 'leftPercent', 'menu'];
  dataSource = new MatTableDataSource(initialData);
}

const initialData: Residue[] = [
  {id: '1', name: 'Коржи', purchaseDate: new Date(), totalAmount: 100, leftAmount:0, usedAmount:0, leftPercent:0},
  {id: '1', name: 'Коробки', purchaseDate: new Date(), totalAmount: 200, leftAmount:0, usedAmount:0, leftPercent:0},
  {id: '1', name: 'Кофе', purchaseDate: new Date(), totalAmount: 300, leftAmount:0, usedAmount:0, leftPercent:0},
];
