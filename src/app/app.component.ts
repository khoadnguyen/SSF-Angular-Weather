import { Component, OnInit } from '@angular/core';
import { WeatherService } from "./weather.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string = 'Khoa\'s Weather App';
  weatherData = {};
  location = {};
  city: string;
  result: any;
  error: string;
  queryResults: string;
  resultsArray: any;

  constructor(public weather$: WeatherService){
  }

  // getWeather(): void {
  //     this.weather$.getData().subscribe(res => {
  //         console.log(res);
  //         this.weatherData = res.current_observation;
  //         console.log("after res ", this.weatherData);
  //     });
  // }

  search(value: string) {
    this.city = value;
    console.log("I am searching for:", this.city);
    this.weather$.getData(value).subscribe(
        data => {
            if(data.response.hasOwnProperty("error")) {
                this.error = "This query could not be matched.";
                console.log("This query could not be matched.")
            } else if (data.response.hasOwnProperty("results")) {
                this.queryResults = "We could not find your city, but these results match.";
                console.log("These match")
            } else {
                this.result = data.current_observation;
            }
            console.log("Response: ", data)
        },
        error => console.log("Error: ", error)
    );
  }

  ngOnInit(): void {
      // this.weather$.pushData()
      //   .subscribe( res => {
      //       console.log(res);
      //   });
      //this.getWeather();
      if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition(position => {
              this.location = position.coords;
              console.log(position.coords);
          });
      }
  }
}
