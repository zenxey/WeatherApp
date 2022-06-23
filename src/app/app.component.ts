import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { WeatherService } from './services/weather.service';
import { Weather, WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private weatherService: WeatherService){

  }
  
  cityName: string = "Nashik"; 

  weatherData?:WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }
  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }
  
  private getWeatherData(cityName:string) {
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (Response) => {
        this.weatherData = Response;
        console.log(Response);
      }
    });
  }
}
