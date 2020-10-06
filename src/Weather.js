import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState(null);
  
  function handleSubmit(event) {
    event.preventDefault();

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3e050f75e6d0f064cfedf4c3fb91df60&units=metric`;

    axios.get(url).then(getWeather);
  }

  function getCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function getWeather(response) {
    
    
    
  }

  return (
    <div className="weather">
      <h2>Tuesday, October 6</h2>
      
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
             <input 
             type="search" 
             placeholder="Enter a city"
             className="form-control"/>
               
             </div>
             <div className="col-3">
             <input 
             className="btn-btn-primary" 
             type="submit" 
             value="Search" />
             </div>
          </div>
        </form>
        
      
      <main className="condition">
        <div className="row">
          <div className="col-4">
            <ul className="left">
              <li className="city">Atlanta</li>
              <li className="time">10:02</li>
              <li className="description">sunny</li>
              <li className="humidity">Humidity: 10%</li>
              <li className="wind">Wind:</li>
              <li className="min">Max/Min</li>
            </ul>
          </div>
          <div className="col-4">
            <ul className="box2">
          <img
            src={` http://openweathermap.org/img/wn/&icon@2x.png`}
            alt="weather">
          </img>
          <li className="temperature">
            25
            <span className="units">°C | F</span>
          </li>
          </ul>
          </div>
          <div className="col-4">
            <ul className="forecast">
              <h3>6-hour forecast</h3>
              <li>
                9:00 <img src="" /> sunny 15 
              </li>
              <li>
                12:00 <img src="" /> sunny 15 
              </li>
              <li>
                15:00 <img src="" /> sunny 18 
              </li>
              <li>
                16:00 <img src="" /> sunny 20 
              </li>
              <li>
                19:00 <img src="" /> sunny 17 
              </li>
              <li>
                22:00 <img src="" /> sunny 18 
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
