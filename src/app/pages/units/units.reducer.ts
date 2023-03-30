import { createAction, createReducer, createSelector, on, props } from '@ngrx/store';
import { IUnit } from 'src/app/interfaces/Unit';
import { IFilter } from './filter.reducer';

export const initialState: IUnit[] = []

export const load = createAction('Load Units', props<{ data: IUnit[] }>())

export const unitsReducer = createReducer(
    initialState,
    on(load, (state, { data }) => {
        return data
    })
);

export const selectUnits = (state: { units: IUnit[], fliter: IFilter }) => state;

export const getItemById = (id: number) => createSelector(selectUnits, (allItems) => {
    if (allItems.units) {
        return allItems.units.find(item => {
            return item.id === id;
        });
    } else {
        return {};
    }
});


