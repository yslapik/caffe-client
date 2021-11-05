import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent, OrdersComponent, ResiduesComponent, SalesComponent} from "./navigation";
import {ItemsTableComponent} from "./components";
import {LookupsComponent} from "./components/lookup/lookups.component";
import {PositionTypesLookupComponent} from "./navigation/lookups/position-types-lookup/position-types-lookup.component";
import {PositionsLookupComponent} from "./navigation/lookups/positions-lookup/positions-lookup.component";
import {ResiduesLookupComponent} from "./navigation/lookups/residues-lookup/residues-lookup.component";


const routes: Routes = [
  { path: 'sales', component: SalesComponent },
  { path: 'residues', component: ResiduesComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'lookups', children: [
      {path: 'positions', component: PositionsLookupComponent},
      {path: 'positionTypes', component: PositionTypesLookupComponent},
      {path: 'residues', component: ResiduesLookupComponent}]
  },
  { path: '', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
