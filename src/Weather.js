import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormatDate from "./FormatDate";

export default function Weather(props) {
  
  
  const [weather, setWeather] = useState({ready:false});

  function handleResponse(response) {
    console.log(response.data);
    setWeather({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      pressure: response.data.main.pressure,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      iconUrl: " http://openweathermap.org/img/wn/10d@2x.png",
    });
    
    
  }
  if (weather.ready) {
    return (
      <div className="weather">
        <FormatDate date={weather.date}/>

        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
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
                <img
                  src={weather.iconUrl}
                  alt={weather.description}
                ></img>
                <li className="temperature">
                  {Math.round(weather.temperature)}
                  <span className="units">°C | F</span>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <ul className="forecast">
                <h4>3-hour forecast</h4>
                <li>
                  9:00{" "}
                  <img
                    src={` http://openweathermap.org/img/wn/10d@2x.png`}
                    alt="Sunny"
                  />{" "}
                  15°
                </li>
                <li>
                  12:00{" "}
                  <img
                    src={` http://openweathermap.org/img/wn/10d@2x.png`}
                    alt="Sunny"
                  />{" "}
                  15°
                </li>
                <li>
                  15:00{" "}
                  <img
                    src={` http://openweathermap.org/img/wn/10d@2x.png`}
                    alt="Sunny"
                  />{" "}
                  18°
                </li>
                <li>
                  16:00{" "}
                  <img
                    src={` http://openweathermap.org/img/wn/10d@2x.png`}
                    alt="Sunny"
                  />{" "}
                  20°
                </li>
                <li>
                  19:00{" "}
                  <img
                    src={` http://openweathermap.org/img/wn/10d@2x.png`}
                    alt="Sunny"
                  />{" "}
                   17°
                </li>
                <li>
                  22:00 <img src={` http://openweathermap.org/img/wn/10d@2x.png`}
                  alt="Sunny"  />  18°
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    );
  } else {
    const apiKey = "3e050f75e6d0f064cfedf4c3fb91df60";
    let city = "Atlanta";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&apiKey=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading";
  }
}
