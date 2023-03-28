import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ICOST, IUnit } from 'src/app/interfaces/Unit';
import { UnitService } from 'src/app/services/unit.service';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit {

  constructor(private _router: Router, private _unitService: UnitService) { }
  units$!: Observable<IUnit[]>

  ngOnInit(): void {
    this._unitService.loadUnits();
    this.units$ = this._unitService.getUnits().pipe(map(units => {
      return units.map((unit) => {
        return { ...unit, cost: this.costToString(unit.cost as ICOST) }
      })

    }))
  }

  handleRowClick(unit: IUnit) {
    this._router.navigate(["units", unit.id])
  }

  costToString(cost: ICOST) {
    if (!cost) return "-"
    return Object.entries(cost).reduce((str, [p, val]) => {
      return `${str}${p} ${val} `;
    }, '');
  }
}
