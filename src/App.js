import React from "react";

import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div>
          <Weather city="Atlanta" />
        </div>

        <p>
          Coded by Dani Miller and is
          <a href="https://github.com/yoviron/my-app.git"> open-source</a>
        </p>
      </div>
    </div>
  );
}

export default App;
