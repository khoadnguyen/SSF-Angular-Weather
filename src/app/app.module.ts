import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { ForecastDashboardComponent } from './forecast-dashboard/forecast-dashboard.component';
import { ForecastCardComponent } from './forecast-card/forecast-card.component';
import { DayCardComponent } from './day-card/day-card.component';
import { DayCardFeatureComponent } from './day-card-feature/day-card-feature.component';
import { DayCardDetailsComponent } from './day-card-details/day-card-details.component';
import { FooterComponent } from './footer/footer.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
