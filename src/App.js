import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <div className="temperature-display-container">
          <div className="temperature-display">10°C</div>
        </div>
        <div className="button-container">
          <button>+</button>
          <button>-</button>
        </div>
      </div>
    </div>
  );
}

export default App;
