import { Action } from '@ngrx/store';
import { LOAD_CITIES, ADD_CITY, EDIT_CITY, REMOVE_CITY } from './actions';
import { City } from '../../models/city.model';

export class AddCity implements Action {
	readonly type = ADD_CITY

	constructor(public payload: City) {}
}

export class EditCity implements Action {
	readonly type = EDIT_CITY

	constructor(public payload: City) {}
}

export class RemoveCity implements Action {
	readonly type = REMOVE_CITY

	constructor(public payload: number) {}
}

export type Actions = AddCity | EditCity | RemoveCity;
