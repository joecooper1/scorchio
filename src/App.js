import React, { useState, useEffect } from "react";
import "./App.css";

import { getWeather } from "./api";

import Sky from "./Components/Background/sky";

function App() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (weather === null) {
      setWeather(getWeather());
    }
  });

  if (weather)
    return (
      <div className="App">
        <Sky weather={weather}></Sky>
      </div>
    );
  else return <h1>Loading</h1>;
}

export default App;
