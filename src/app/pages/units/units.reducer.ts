import { createAction, createReducer, on, props } from '@ngrx/store';
import { IUnit } from 'src/app/interfaces/Unit';

export const initialState: IUnit[] = []


export const load = createAction('Load Units', props<{ data: IUnit[] }>())

export const unitsReducer = createReducer(
    initialState,
    on(load, (state, { data }) => {
        return data
    })
);

export const selectUnits = (state: IUnit[]) => state;
