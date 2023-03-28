import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IUnit } from '../interfaces/Unit';
import { load } from '../pages/units/units.reducer';
import { UNITS } from './units';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  constructor(private _store: Store<{ units: IUnit[] }>) { }
  loadUnits() {
    this._store.dispatch(load({ data: UNITS }))
  }
  getUnits() {
    return this._store.select('units')
  }
}
