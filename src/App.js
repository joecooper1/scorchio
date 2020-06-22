import React, { useState, useEffect } from "react";

import { getWeather } from "./api";

import useTime from "./utils/useTime";

import Sky from "./Components/Background/sky";
import Stars from "./Components/Background/stars";
import Clouds from "./Components/Background/clouds";
import DistantHills from "./Components/Background/distantHills";
import Rain from "./Components/Background/rain";
import Snow from "./Components/Background/snow";
import InfoBox from "./Components/Foreground/infobox";

function App() {
  const [weather, setWeather] = useState(null);
  let time = useTime();

  useEffect(() => {
    async function callGetWeather() {
      const newWeather = await getWeather();
      setWeather(newWeather);
    }

    if (weather === null) {
      callGetWeather();
    }
  });

  if (weather) {
    //Change weather
    weather.clouds.all = 100;
    //Change time
    time += 3600 * 10;
    //Change windspeed
    // weather.wind.speed = 0;
    //Change type
    weather.weather[0].main = "Snow";
    weather.weather[0].description = "snow";

    return (
      <div className="App">
        <Sky weather={weather} time={time} />
        <Stars weather={weather} time={time} />
        <Clouds weather={weather} time={time} />
        <DistantHills weather={weather} time={time} />
        <Rain weather={weather} time={time} />
        <Snow weather={weather} time={time} />
        <InfoBox weather={weather} />
      </div>
    );
  } else return <h1>Loading</h1>;
}

export default App;
