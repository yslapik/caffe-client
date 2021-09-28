import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent, ResiduesComponent, SalesComponent} from "./navigation";


const routes: Routes = [
  { path: 'sales', component: SalesComponent },
  { path: 'residues', component: ResiduesComponent },
  { path: '', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
