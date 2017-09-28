import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdGridListModule, MdToolbarModule, MdMenuModule, MdIconModule, MdTooltipModule, MdSidenavModule, MdCardModule, MdButtonModule, MdListModule, MdInputModule, MdTabsModule, MdSelectModule } from '@angular/material';

import { FormsModule, ReactiveFormsModule, NgModel } from "@angular/forms";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ToolbarComponent } from './header/toolbar/toolbar.component';
import { MainNavComponent } from './header/main-nav/main-nav.component';
import { ForecastDashboardComponent } from './forecast-dashboard/forecast-dashboard.component';
import { ForecastCardComponent } from './forecast-dashboard/forecast-card/forecast-card.component';
import { DayCardComponent } from './day-card/day-card.component';
import { DayCardFeatureComponent } from './day-card/day-card-feature/day-card-feature.component';
import { DayCardDetailsComponent } from './day-card/day-card-details/day-card-details.component';
import { FooterComponent } from './footer/footer.component';

import { WeatherService} from "./weather.service";
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToolbarComponent,
    MainNavComponent,
    ForecastDashboardComponent,
    ForecastCardComponent,
    DayCardComponent,
    DayCardFeatureComponent,
    DayCardDetailsComponent,
    FooterComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MdGridListModule,
    MdToolbarModule,
    MdMenuModule,
    MdIconModule,
    MdTooltipModule,
    MdSidenavModule,
    MdCardModule,
    MdButtonModule,
    MdListModule,
    MdInputModule,
    FormsModule,
    MdTabsModule,
    MdSelectModule,
    ReactiveFormsModule
  ],
  providers: [ WeatherService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
