import { createAction, createReducer, on, props } from '@ngrx/store';

export interface IFilterCost {
    good: string,
    range: number
}

export interface IFilter {
    age: string,
    costs: IFilterCost[]
}

export const initialState: IFilter = {
    age: "",
    costs: []
}

export const updateFilter = createAction('update Filter', props<{ data: IFilter }>())
export const clear = createAction('clear Filter')

export const filterReducer = createReducer(
    initialState,
    on(updateFilter, (state, { data }) => {
        return data
    }),
    on(clear, (state) => { return { ...state, age: "" } })
);
