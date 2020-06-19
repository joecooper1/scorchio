import React, { useState, useEffect } from "react";

import { getWeather } from "./api";

import Sky from "./Components/Background/sky";
import InfoBox from "./Components/Foreground/infobox";

function App() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    async function callGetWeather() {
      const newWeather = await getWeather();
      setWeather(newWeather);
    }

    if (weather === null) {
      callGetWeather();
    }
  });

  if (weather)
    return (
      <div className="App">
        <Sky weather={weather}></Sky>
        <InfoBox weather={weather} />
      </div>
    );
  else return <h1>Loading</h1>;
}

export default App;
