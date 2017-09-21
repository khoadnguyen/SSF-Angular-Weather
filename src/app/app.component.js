"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var mockData = [
    {
        "display_location": {
            "full": "San Francisco, CA"
        },
        "temp_f": 66.3,
        "weather": "Partly Cloudy",
        "relative_humidity": "65%"
    },
    {
        "display_location": {
            "full": "San Diego, CA"
        },
        "temp_f": 80,
        "weather": "Sunny",
        "relative_humidity": "30%"
    },
    {
        "display_location": {
            "full": "Seattle, WA"
        },
        "temp_f": 50,
        "weather": "Rain",
        "relative_humidity": "100%"
    }, {
        "display_location": {
            "full": "Las Vegas, NV"
        },
        "temp_f": 105,
        "weather": "Hot",
        "relative_humidity": "5%"
    }
];
var AppComponent = (function () {
    function AppComponent(weather$) {
        this.weather$ = weather$;
        this.title = 'Khoa\'s Weather App';
        this.weatherData = {};
    }
    AppComponent.prototype.getWeather = function () {
        var _this = this;
        this.weather$.getData().subscribe(function (res) {
            console.log(res);
            _this.weatherData = res.current_observation;
            console.log("after res", _this.weatherData);
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getWeather();
        console.log('Weather Data: ', this.weatherData);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
