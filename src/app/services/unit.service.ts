import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUnit } from '../interfaces/Unit';
import { IFilter, updateFilter, clear } from '../pages/units/filter.reducer';
import { getItemById, load } from '../pages/units/units.reducer';
import { UNITS } from './units';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  constructor(private _store: Store<any>) { }
  loadUnits() {
    this._store.dispatch(load({ data: UNITS }))
  }
  getUnits() {
    return this._store.select('units')
  }
  getFilters() {
    return this._store.select('filter')
  }
  updateFilter(filter: IFilter) {
    this._store.dispatch(updateFilter({ data: filter }))
  }
  clearFilter() {
    this._store.dispatch(clear())
  }
  getById(id: number) {
    return this._store.select(getItemById(id)) as Observable<IUnit>
  }

}
