import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState(null);
  const [message, setMessage] = useState(null);

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
    setMessage(
      <ul>
        <li>temperature: {Math.round(response.data.main.temp)}°C</li>
        <li>description: {response.data.weather[0].description}</li>
        <li>humidity: {response.data.main.humidity} %</li>
        <li>wind: {Math.round(response.data.wind)} km/h</li>
        <img
          src={` http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
          alt="weather"
        />
      </ul>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter a city" onChange={getCity} />
        <input type="submit" value="Search" />
      </form>
      <h4>{message}</h4>
      
      
    </div>
  );
}
