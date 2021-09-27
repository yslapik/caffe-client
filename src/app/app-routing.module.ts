import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemsTableComponent} from "./items-table/items-table.component";
import {AppComponent} from "./app.component";
import {HomepageComponent} from "./navigation/homepage/homepage.component";

const routes: Routes = [
  { path: 'sales', component: ItemsTableComponent },
  { path: '', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
