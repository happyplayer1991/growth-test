import { Action } from '@ngrx/store';
import { City } from '../../models/city.model';
import * as cityActions from '../actions/city.actions';
import { CREATE_CITY, ADD_CITY, EDIT_CITY, UPDATE_CITY, REMOVE_CITY } from '../actions/actions';

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
    case CREATE_CITY:
      let selectedCity = {
        id: 0,
        title: "",
        color: "",
        description: ""
      }
      return { ...state, selectedCity };

  	case ADD_CITY:
      let cities = state.cities;
      let last_id = cities.length > 0 ? cities[cities.length - 1].id : 0;
      let city = { ...action.payload, id: ++last_id };
      selectedCity = city;
      cities = [...state.cities, city];
  		return { ...state, cities, selectedCity };

    case EDIT_CITY:
      return { ...state, selectedCity: action.payload };

    case UPDATE_CITY:
      cities = state.cities
      let update_index = cities.findIndex(c => c.id === action.payload.id);
      cities[update_index] = action.payload;
      selectedCity = cities[update_index];
      return { ...state, cities, selectedCity };

    case REMOVE_CITY:
      cities = state.cities;
      let remove_index = cities.findIndex(c => c.id === action.payload)
      cities.splice(remove_index, 1);
      return { ...state, cities, selectedCity: null };

    default:
      return state;
  }
}