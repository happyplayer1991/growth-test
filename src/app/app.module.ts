import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { cityReducer } from './store/reducers/city.reducer';
import { environment } from '../environments/environment';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    StoreModule.forRoot({
      cityState: cityReducer
    }),
    FormsModule,
    ColorPickerModule,
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
