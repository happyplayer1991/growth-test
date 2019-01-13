import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { City } from '../models/city.model';
import * as CityActions from '../store/actions/city.actions';
import { CityState } from '../store/reducers/city.reducer';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	selectedCity: City;
	
	constructor(private store: Store<any>) {
	}

	ngOnInit() {
		this.store.select('cityState')
			.subscribe((cityState: CityState) => {
				this.selectedCity = JSON.parse(JSON.stringify(cityState.selectedCity));
			})
	}

	onSave() {
		if (this.selectedCity.id === 0) {
			// Add new city
			this.store.dispatch(new CityActions.AddCity(this.selectedCity));
		}
		else {
			// Update selected city
			this.store.dispatch(new CityActions.UpdateCity(this.selectedCity));
		}
	}

	removeCity() {
		// Remove selected city
		this.store.dispatch(new CityActions.RemoveCity(this.selectedCity.id));
	}
}