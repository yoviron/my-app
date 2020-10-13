import React, { useState } from "react";

export default function TemperatureUnit(props) {
  const [unit, setUnit] = useState("celsius");

  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");

}
        function displayCelsius(event) {
            event.preventDefault();
            setUnit("celsius");
        }
  if (unit === "celsius") {
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
    let fahrenheit = (props.celsius *9)/5 + 32;
    return (
      <li className="temperature">
        {Math.round(fahrenheit)}
        <span className="units">
          
          <a href="/" onClick={displayCelsius}>
            °C 
          </a> | F
        </span>
      </li>
    );
  }
}
