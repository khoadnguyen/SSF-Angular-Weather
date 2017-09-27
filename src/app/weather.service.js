"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
require('rxjs/add/operator/map');
var WeatherService = (function () {
    function WeatherService(http) {
        this.http = http;
        this.foo = 'Hello this is Weather!';
        this.apiKey = "7442d6907c24c040";
        // url: string = "//api.wunderground.com/api/7442d6907c24c040/conditions/q/CA/San_Francisco.json";
        this.url = "//api.wunderground.com/api/7442d6907c24c040/conditions/q/CA/";
        this.pushUrl = "https://khoa-fall-2017-phortonssf.c9users.io:8081/postit";
    }
    // getData(): any {
    //   this.http.get('http://api.wunderground.com/api/7442d6907c24c040/conditions/q/CA/San_Francisco.json')
    //     .subscribe(resp => {
    //       // Console the data response and display the body.
    //       console.log(resp["_body"]);
    //     });
    // }
    WeatherService.prototype.getData = function (endpoint) {
        return this.http.get(this.url + endpoint + ".json")
            .map(function (res) { return res.json(); });
    };
    WeatherService.prototype.pushData = function () {
        console.log("Poop");
        return this.http.post(this.pushUrl, { "test": 10 })
            .map(function (res) { return res.json(); });
    };
    WeatherService = __decorate([
        core_1.Injectable()
    ], WeatherService);
    return WeatherService;
}());
exports.WeatherService = WeatherService;
