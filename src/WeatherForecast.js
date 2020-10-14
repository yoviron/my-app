import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import ForecastData from "./ForecastData";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }
  if (loaded && props.city=== forecast.city.name) {
    return (
      <div className="forecast">
        <div className="hourly">
        <ForecastData data={forecast.list[0]}/>
        </div>
        <div className="hourly">
        <ForecastData data={forecast.list[1]}/>
        </div>
        <div className="hourly">
        <ForecastData data={forecast.list[2]}/>
        </div>
        <div className="hourly">
        <ForecastData data={forecast.list[3]}/>
        </div>
        <div className="hourly">
        <ForecastData data={forecast.list[4]}/>
        </div>
        <div className="hourly">
        <ForecastData data={forecast.list[5]}/>
        </div>
        
       
      </div>
    );
  } else {
    const apiKey = "3e050f75e6d0f064cfedf4c3fb91df60";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);
    return null;
  }
}
