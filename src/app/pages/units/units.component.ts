import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, take, tap } from 'rxjs';
import { ICOST, IUnit } from 'src/app/interfaces/Unit';
import { UnitService } from 'src/app/services/unit.service';
import { IFilter, IFilterCost } from './filter.reducer';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit {

  constructor(private _router: Router, private _unitService: UnitService) { }
  units$!: Observable<IUnit[]>
  filter!: IFilter;
  ngOnInit(): void {
    // Fill units
    this._unitService.loadUnits();

    this.getUnits()
    this.getFilter()
  }

  handleRowClick(unit: IUnit) {
    this._router.navigate(["units", unit.id])
  }

  getUnits() {
    this.units$ = this._unitService.getUnits().pipe(take(1), map(units => {
      return units.map((unit) => {
        return { ...unit, cost: this.costToString(unit.cost as ICOST) }
      })
    }))
  }

  getFilter() {
    this._unitService.getFilters().subscribe((data) => { this.filter = data; console.log("filter:", this.filter) })
  }

  costToString(cost: ICOST) {
    if (!cost) return "-"
    return Object.entries(cost).reduce((str, [p, val]) => {
      return `${str}${p} ${val} `;
    }, '');
  }

  handleClickAge(age: string) {
    if (!age) this._unitService.clearFilter()
    else
      this._unitService.updateFilter({ ...this.filter, age: age })
  }
  handleUpdateCostFilter(costs: IFilterCost[]) {
    console.log("costs :", costs);
    this._unitService.updateFilter({ ...this.filter, costs: costs })
  }


}
