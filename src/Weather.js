import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weather, setWeather] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setWeather ({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      preasure: response.data.main.preasure,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      city: response.data.name


    });
    setReady(true);
  }
  if (ready) {
    return (
      <div className="weather">
        <h2>Tuesday, October 6</h2>
        

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
                <li className="city">Atlanta</li>
                <li className="time">10:02</li>
                <li className="description">{weather.description}</li>
                <li className="humidity">Humidity:{weather.humidity} %</li>
                <li className="wind">Wind:{weather.wind}</li>
                <li className="preasure">Preasure:{weather.preasure}</li>
              </ul>
            </div>
            <div className="col-4">
              <ul className="box2">
                <img
                  src={` http://openweathermap.org/img/wn/10d@2x.png`}
                  alt="Sunny"
                ></img>
                <li className="temperature">
                  {Math.round(weather.temperature)}
                  <span className="units">°C | F</span>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <ul className="forecast">
                <h3>6-hour forecast</h3>
                <li>
                  9:00 <img src=""alt="" /> sunny 15
                </li>
                <li>
                  12:00 <img src="" alt="" /> sunny 15
                </li>
                <li>
                  15:00 <img src="" alt="" /> sunny 18
                </li>
                <li>
                  16:00 <img src="" alt="" /> sunny 20
                </li>
                <li>
                  19:00 <img src=""alt="" /> sunny 17
                </li>
                <li>
                  22:00 <img src=""alt="" /> sunny 18
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
