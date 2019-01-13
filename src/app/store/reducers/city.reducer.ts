import { Action } from '@ngrx/store';
import { City } from '../../models/city.model';
import * as cityActions from '../actions/city.actions';
import { LOAD_CITIES, ADD_CITY, EDIT_CITY, REMOVE_CITY } from '../actions/actions';

export interface CityState {
  cities: City[],
  selectedCity: City
}

const initialState: CityState = {
  cities: [{
    id: 1,
    title: "Paris",
    color: "#ed171f",
    description: "This is Paris."
  },{
    id: 2,
    title: "New York",
    color: "#ff781b",
    description: "This is New York."
  },{
    id: 3,
    title: "Zurich",
    color: "#ff9a00",
    description: "This is Zurich."
  },{
    id: 4,
    title: "Barcelona",
    color: "#ffaec9",
    description: "This is Barcelona."
  }],
  selectedCity: null
}

export function cityReducer(state: CityState = initialState, action: cityActions.Actions) {
  switch (action.type) {
  	case ADD_CITY:
      let cities = [...state.cities, action.payload];
  		return { ...state, cities };
    case EDIT_CITY:
      return { ...state, selectedCity: action.payload };
    default:
      return state;
  }
}
