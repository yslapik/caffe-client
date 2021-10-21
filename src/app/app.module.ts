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
    OrderTableComponent
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
      MatExpansionModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
