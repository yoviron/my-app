import React from "react";
import WeatherIcon from "./WeatherIcon";
import TemperatureUnit from "./TemperatureUnit";
import WeatherForecast from "./WeatherForecast";



export default function CityCondition(props) {
    return(
        <div> 
          <h3 className="city">{props.weather.city}</h3>
          <div className="row">
            <div className="col-4">
              <ul className="left">
                <li className="text-capitalize"> {props.weather.description}</li>
                <li className="humidity">Humidity: {props.weather.humidity} %</li>
                <li className="wind">Wind: {Math.round(props.weather.wind)} m/s</li>
                <li className="preasure">Pressure: {props.weather.pressure} hPa</li>
              </ul>
            </div>
            <div className="col-4">
              <ul className="box2">
                <div className="icon">
                  <WeatherIcon code={props.weather.icon} />
                </div>
                <div>
                  <TemperatureUnit celsius={props.weather.temperature} unit= {props.unit} setUnit={props.setUnit}/>
                </div>
              </ul>
            </div> 
            <div className="col-4">
              <h4>3-Hour Forecast</h4>

              <WeatherForecast city={props.weather.city} unit={props.unit} />
            
            </div>
          </div>
        </div>
    );
}