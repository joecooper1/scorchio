import React, { useState, useEffect } from "react";

import { getWeather } from "./api";

import useTime from "./utils/useTime";

import Rain from "./Components/Background/rain";
import InfoBox from "./Components/Foreground/infobox";

function App() {
  const [weather, setWeather] = useState(null);
  const time = useTime();

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
        <Rain weather={weather} time={time} />
        <InfoBox weather={weather} />
      </div>
    );
  else return <h1>Loading</h1>;
}

export default App;
