import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule } from "@angular/material/form-field";
import { ItemsTableComponent,ResiduesTableComponent, DatePickerComponent } from './components';
import {MatToolbarModule} from "@angular/material/toolbar";
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent, SidenavListComponent, HomepageComponent, ResiduesComponent, SalesComponent, OrdersComponent } from './navigation';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import {MatTabsModule} from "@angular/material/tabs";
import {MatNativeDateModule} from '@angular/material/core';
import { ActionsPanelComponent } from './navigation/sales/actionsPanel/actionsPanel.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatMenuModule} from "@angular/material/menu";
import { OrderDashboardComponent } from './components/order-dashboard/order-dashboard.component';
import { OrderDashboardItemComponent } from './components/order-dashboard/order-dashboard-item/order-dashboard-item.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { OrderTableComponent } from './components/order-table/order-table.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRippleModule} from '@angular/material/core'
import {MatTooltipModule} from "@angular/material/tooltip";
import { HttpClientModule } from '@angular/common/http';
import { MenuListItemComponent } from './components/menu-list-item/menu-list-item.component';
import {LookupsComponent} from "./components/lookup/lookups.component";
import { PositionsLookupComponent } from './navigation/lookups/positions-lookup/positions-lookup.component';
import { PositionTypesLookupComponent } from './navigation/lookups/position-types-lookup/position-types-lookup.component';
import { ResiduesLookupComponent } from './navigation/lookups/residues-lookup/residues-lookup.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsTableComponent,
    HeaderComponent,
    SidenavListComponent,
    HomepageComponent,
    ResiduesComponent,
    SalesComponent,
    ActionsPanelComponent,
    DatePickerComponent,
    ResiduesTableComponent,
    OrdersComponent,
    OrderDashboardComponent,
    OrderDashboardItemComponent,
    OrderTableComponent,
    LookupsComponent,
    MenuListItemComponent,
    PositionsLookupComponent,
    PositionTypesLookupComponent,
    ResiduesLookupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatTabsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatMenuModule,
    MatGridListModule,
    MatExpansionModule,
    MatRippleModule,
    MatTooltipModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
