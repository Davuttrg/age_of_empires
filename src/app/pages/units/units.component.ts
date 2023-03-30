import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest, Observable, of, switchMap, tap } from 'rxjs';
import { ICOST, IUnit } from 'src/app/interfaces/Unit';
import { UnitService } from 'src/app/services/unit.service';
import { IFilter, IFilterCost } from './filter.reducer';

export type ISingleCost = "Wood" | "Gold" | "Food"
@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit {

  constructor(
    private _router: Router,
    private _unitService: UnitService
  ) { }

  units$!: Observable<IUnit[]>
  filter: IFilter = {
    age: "",
    costs: []
  };

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

    this.units$ = combineLatest([this._unitService.getUnits(), this.getFilter()]).pipe(
      switchMap(([units, filter]) => {
        return of(
          units
            .filter((unit: IUnit) => filter.age ? unit.age?.toLowerCase() == filter.age : true)
            .filter((unit: IUnit) => {
              if (!filter.age && !filter.costs.length) return true;

              const costs = unit.cost as ICOST;

              if (!costs) return false;

              return Object.keys(costs).every((key) => {
                const item = filter.costs.find((cost: IFilterCost) => key == cost.good) as IFilterCost;
                return item ? costs[key as ISingleCost] as number <= item?.range : false
              })

            })
            .map((unit: IUnit) => {
              return { ...unit, cost: this.costToString(unit.cost as ICOST) }
            })
        )
      })
    )
  }

  applyFilter(units: IUnit[], filter: IFilter): IUnit[] {
    return units
      .filter(x => filter.age && x.age == filter.age)
  }

  getFilter() {
    return this._unitService.getFilters().pipe(tap((res) => { this.filter = res; }))
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
    this._unitService.updateFilter({ ...this.filter, costs: costs })
  }


}
