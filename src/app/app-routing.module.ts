import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent, OrdersComponent, ResiduesComponent, SalesComponent, LookupsComponent} from "./navigation";


const routes: Routes = [
  { path: 'sales', component: SalesComponent },
  { path: 'residues', component: ResiduesComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'lookups', component: LookupsComponent },
  { path: '', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
