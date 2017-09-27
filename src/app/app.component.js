"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent(weather$) {
        this.weather$ = weather$;
        this.title = 'Khoa\'s Weather App';
        this.weatherData = {};
        this.city = "";
    }
    AppComponent.prototype.getWeather = function () {
        // this.weather$.getData().subscribe(res => {
        //     console.log(res);
        //     this.weatherData = res.current_observation;
        //     console.log("after res ", this.weatherData)
        // });
    };
    AppComponent.prototype.search = function (value) {
        var _this = this;
        this.city = value;
        console.log("I am searching for:", this.city);
        this.weather$.getData(value).subscribe(function (data) {
            if (data.response.hasOwnProperty("error")) {
                _this.error = "This query could not be matched.";
                console.log("This query could not be matched.");
            }
            else if (data.response.hasOwnProperty("results")) {
                _this.queryResults = "We could not find your city, but these results match.";
                console.log("These match");
            }
            else {
                _this.result = data.current_observation;
            }
            console.log("Response: ", data);
        }, function (error) { return console.log("Error: ", error); });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.weather$.pushData()
            .subscribe(function (res) {
            console.log(res);
        });
        this.getWeather();
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
