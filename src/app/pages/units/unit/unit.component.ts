import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICOST, IUnit } from 'src/app/interfaces/Unit';
import { UnitService } from 'src/app/services/unit.service';

export type ISingleCost = "Wood" | "Gold" | "Food"
@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss']
})
export class UnitComponent implements OnInit {

  unit$!: Observable<IUnit>;

  constructor(private _route: ActivatedRoute, private _unitService: UnitService, private _store: Store<any>) { }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get("id")
    this.unit$ = this._unitService.getById(Number(id));

  }
  getGoodsCost(unit: IUnit): { cost: ISingleCost, value: number }[] {
    return [
      {
        cost: "Wood",
        value: (unit.cost as ICOST).Wood || 0
      },
      {
        cost: "Food",
        value: (unit.cost as ICOST).Food || 0
      },
      {
        cost: "Gold",
        value: (unit.cost as ICOST).Gold || 0
      }
    ]
  }
}
