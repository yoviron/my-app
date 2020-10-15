import React from "react";

export default function TemperatureUnit(props) {
  

  function displayFahrenheit(event) {
    event.preventDefault();
    props.setUnit("fahrenheit");
  }
  function displayCelsius(event) {
    event.preventDefault();
    props.setUnit("celsius");
    
  }
  if (props.unit === "celsius") {
    return (
      <li className="temperature">
        {Math.round(props.celsius)}
        <span className="units">
          °C |{" "}
          <a href="/" onClick={displayFahrenheit}>
            F
          </a>
        </span>
      </li>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <li className="temperature">
        {Math.round(fahrenheit)}
        <span className="units">
          <a href="/" onClick={displayCelsius}>
            °C
          </a>{" "}
          | F
        </span>
      </li>
    );
  }
}
