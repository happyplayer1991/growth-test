import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { City } from '../models/city.model';
import * as CityActions from '../store/actions/city.actions';
import { CityState } from '../store/reducers/city.reducer';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

	cities: City[];

	selectedCity: City;

	constructor(private store: Store<any>) {
		store.select('cityState')
			.subscribe((cityState: CityState) => {
				this.cities = cityState.cities;
				this.selectedCity = cityState.selectedCity;
			})
	}

	selectCity(city) {
		this.store.dispatch(new CityActions.EditCity(city));
	}

	createCity() {
		this.store.dispatch(new CityActions.CreateCity());
	}

	ngOnInit() {
	}
}