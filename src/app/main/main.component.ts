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
		store.select('cityState')
			.subscribe((cityState: CityState) => {
				this.selectedCity = cityState.selectedCity;
			})
	}

	ngOnInit() {
	}
}