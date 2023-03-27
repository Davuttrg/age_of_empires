import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UnitComponent } from './pages/units/unit/unit.component';
import { UnitsComponent } from './pages/units/units.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "units",
    children: [
      {
        path: '',
        component: UnitsComponent
      },
      {
        path: ':id',
        component: UnitComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
