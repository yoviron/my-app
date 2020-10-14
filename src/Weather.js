import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherIcon from "./WeatherIcon";
import FormatDate from "./FormatDate";
import TemperatureUnit from "./TemperatureUnit";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.city);
  const [weather, setWeather] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeather({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      pressure: response.data.main.pressure,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,

      icon: response.data.weather[0].icon,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
    });
  }
  function search() {
    const apiKey = "3e050f75e6d0f064cfedf4c3fb91df60";

    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&apiKey=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weather.ready) {
    return (
      <div className="weather">
        <FormatDate date={weather.date} />

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input className="btn btn-primary" type="submit" value="Search" />
            </div>
          </div>
        </form>

        <main className="condition">
          <div className="row">
            <div className="col-4">
              <ul className="left">
                <li className="city">{weather.city}</li>
                <li className="text-capitalize"> {weather.description}</li>
                <li className="humidity">Humidity: {weather.humidity} %</li>
                <li className="wind">Wind: {Math.round(weather.wind)}</li>
                <li className="preasure">Pressure: {weather.pressure}</li>
              </ul>
            </div>
            <div className="col-4">
              <ul className="box2">
                <div className="icon">
                  <WeatherIcon code={weather.icon} />
                </div>
                <div>
                  <TemperatureUnit celsius={weather.temperature} />
                </div>
              </ul>
            </div>
            <div className="col-4">
              <h4>3-hour forecast</h4>

              <WeatherForecast city={weather.city} />
            </div>
          </div>
        </main>
      </div>
    );
  } else {
    search();

    return "Loading";
  }
}
