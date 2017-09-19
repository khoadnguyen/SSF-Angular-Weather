import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdGridListModule } from '@angular/material';
import { MdToolbarModule } from "@angular/material";
import { MdMenuModule } from "@angular/material";
import { MdIconModule } from '@angular/material';
import { MdTooltipModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdListModule } from '@angular/material';

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
    FooterComponent
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
    MdListModule
  ],
  providers: [ WeatherService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
