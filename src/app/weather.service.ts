import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

@Injectable()
export class WeatherService {
  foo: string = 'Hello this is Weather!';
  apiKey: string = "7442d6907c24c040";
  // url: string = "//api.wunderground.com/api/7442d6907c24c040/conditions/q/CA/San_Francisco.json";
  url: string = "//api.wunderground.com/api/7442d6907c24c040/conditions/q/CA/";
  results: any;
  pushUrl: string = "https://khoa-fall-2017-phortonssf.c9users.io:8081/postit"; 

  constructor(private http: Http) { }

  // getData(): any {
  //   this.http.get('http://api.wunderground.com/api/7442d6907c24c040/conditions/q/CA/San_Francisco.json')
  //     .subscribe(resp => {
  //       // Console the data response and display the body.
  //       console.log(resp["_body"]);
  //     });
  // }

  getData(endpoint){
      return this.http.get(this.url + endpoint + ".json")
          .map(res => res.json());
  }

  pushData() {
    console.log("Poop")
    return this.http.post(this.pushUrl, {"test": 10})
          .map(res => res.json());
  }

}
