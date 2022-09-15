import React, { useState } from "react";
import "./App.css";

function App() {
  const [temperature, setTemperature] = useState(0);

  function increaseTemp() {
    setTemperature(temperature + 1);
  }

  function decreaseTemp() {
    setTemperature(temperature - 1);
  }

  return (
    <div className="App">
      <div className="app-container">
        <div className="temperature-display-container">
          <div className="temperature-display">{temperature}°C</div>
        </div>
        <div className="button-container">
          <button onClick={increaseTemp}>+</button>
          <button onClick={decreaseTemp}>-</button>
        </div>
      </div>
    </div>
  );
}

export default App;
