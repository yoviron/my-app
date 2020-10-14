import React from "react";

import WeatherIcon from "./WeatherIcon";

export default function ForecastData(props) {
  return (
    <div>
      <span className="time">
        {new Date(props.data.dt * 1000).getHours()}:00
        
      </span>

      <WeatherIcon code={props.data.weather[0].icon} />
      <span className="forecast-temp">
        {Math.round(props.data.main.temp)}°
      </span>
    </div>
  );
}
