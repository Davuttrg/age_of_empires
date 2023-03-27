import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { UnitComponent } from './pages/units/unit/unit.component';
import { UnitsComponent } from './pages/units/units.component';
import { HeaderComponent } from './components/ui/header/header.component';
import { TableComponent } from './components/shared/table/table.component';
import { AgeFilterComponent } from './components/ui/units/age-filter/age-filter.component';
import { CostFilterComponent } from './components/ui/units/cost-filter/cost-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UnitsComponent,
    UnitComponent,
    HeaderComponent,
    TableComponent,
    AgeFilterComponent,
    CostFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
