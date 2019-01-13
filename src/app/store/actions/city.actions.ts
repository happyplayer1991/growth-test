import { Action } from '@ngrx/store';
import { CREATE_CITY, ADD_CITY, EDIT_CITY, UPDATE_CITY, REMOVE_CITY } from './actions';
import { City } from '../../models/city.model';

export class CreateCity implements Action {
	readonly type = CREATE_CITY
}

export class AddCity implements Action {
	readonly type = ADD_CITY

	constructor(public payload: City) {}
}

export class EditCity implements Action {
	readonly type = EDIT_CITY

	constructor(public payload: City) {}
}

export class UpdateCity implements Action {
	readonly type = UPDATE_CITY

	constructor(public payload: City) {}
}

export class RemoveCity implements Action {
	readonly type = REMOVE_CITY

	constructor(public payload: number) {}
}

export type Actions = CreateCity | AddCity | EditCity | UpdateCity | RemoveCity;
