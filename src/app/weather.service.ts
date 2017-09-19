import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

@Injectable()
export class WeatherService {
  foo: string = 'Hello this is Weather!';
  apiKey: string = "7442d6907c24c040";
  url: string = "http://api.wunderground.com/api/7442d6907c24c040/conditions/q/CA/San_Francisco.json";
  results: any;

  constructor(private http: Http) { }

  // getData(): any {
  //   this.http.get('http://api.wunderground.com/api/7442d6907c24c040/conditions/q/CA/San_Francisco.json')
  //     .subscribe(resp => {
  //       // Console the data response and display the body.
  //       console.log(resp["_body"]);
  //     });
  // }

  getData(){
      return this.http.get(this.url)
          .map(res => res.json());
  }

}
