import React from "react";

import WeatherIcon from "./WeatherIcon";

export default function ForecastData(props) {
    function hours(){
        let date= new Date(props.data.dt * 1000);
         let hours= date.getHours() ;
         if(hours<10) {
             hours=`0${hours}`
            }
            return `${hours}:00`

    }

  return (
    <div>
      <span className="time">
        {hours()}
        
      </span>

      <WeatherIcon code={props.data.weather[0].icon} />
      <span className="forecast-temp">
        {Math.round(props.data.main.temp)}°
      </span>
    </div>
  );
}
