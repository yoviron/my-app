import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="forecast">
        <span className="time">
          {new Date(forecast.list[0].dt * 1000).getHours()}:00
        </span>
        
        <WeatherIcon code={forecast.list[0].weather[0].icon} />
       
        <span className="forecast-temp">
          {Math.round(forecast.list[0].main.temp)}°C
        </span>
      </div>
    );
  } else {
    const apiKey = "3e050f75e6d0f064cfedf4c3fb91df60";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);
    return null;
  }
}
