import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div>
          <Weather />
        </div>
      </header>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="box1">
                <ul>
                  <li className="city">Atlanta</li>
                  <li className="date">10/02</li>
                  <li className="description">sunny</li>
                  <img
                    src={` http://openweathermap.org/img/wn/&icon@2x.png`}
                    alt="weather"
                  ></img>
                  <li className="temperature">25°C</li>
                </ul>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity: 10%</li>
                <li>Wind:</li>
                <li>Max/Min</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className="footer">
          <div className="footer1">
            <div className="footer2"></div>
            <div className="footer3"></div>
            <div className="footer4"></div>
            <div className="footer5"></div>
            <div className="footer6"></div>
            <div className="footer7"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
