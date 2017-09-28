import { Component, OnInit } from '@angular/core';
import { WeatherService } from "./weather.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string = 'Khoa\'s Weather App';
  location: any;
  currentLocation: any;

  constructor(public weather$: WeatherService){
      if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition(position => {
              weather$.getLocation(position.coords.latitude, position.coords.longitude)
                  .subscribe(res => {
                      this.currentLocation = res.location;
                  })
          })
      }
  }

  // getWeather(): void {
  //     this.weather$.getData().subscribe(res => {
  //         console.log(res);
  //         this.weatherData = res.current_observation;
  //         console.log("after res ", this.weatherData);
  //     });
  // }



  ngOnInit(): void {
      // this.weather$.pushData()
      //   .subscribe( res => {
      //       console.log(res);
      //   });
      //this.getWeather();
  }
}
