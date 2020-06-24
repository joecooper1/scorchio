import React, { useState, useEffect } from "react";

import { getWeather } from "./api";

import useTime from "./utils/useTime";

import Screen from "./Components/screen";
import OptionsScreen from "./Components/Options/optionsScreen";

import { WholeScreen } from "./styles/screen.styles";

const width = window.innerWidth;
const height = window.innerHeight;

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

  //Functions to change the weather
  function changeWeather(newValues) {
    //Make a shallow copy of the existing weather
    const newWeather = { ...weather };
    //Loop through each of the new values and change the corresponding property
    newWeather.weather[0].main = newValues["weather[0].main"];
    newWeather.weather[0].description = newValues["weather[0].description"];
    newWeather.wind.speed = parseInt(newValues["wind.speed"]);
    newWeather.clouds.all = parseInt(newValues["clouds.all"]);
    console.log(newWeather);
    //Set the weather
    setWeather(newWeather);
  }

  //Functions to change location
  async function changeCity(city) {
    const newWeather = await getWeather(city);
    setWeather(newWeather);
  }

  async function changeCoords(lat, lon) {
    const newWeather = await getWeather(null, null, lat, lon);
    setWeather(newWeather);
  }

  //Return
  if (weather) {
    //Change weather
    // weather.clouds.all = 100;
    //Change time
    // time += 3600 * 15;
    //Change windspeed
    // weather.wind.speed = 50;
    //Change type
    // weather.weather[0].main = "Snow";
    // weather.weather[0].description = "light snow";

    return (
      <div className="App">
        <WholeScreen>
          <Screen weather={weather} time={time} width={width} height={height} />
          <OptionsScreen
            weather={weather}
            time={time}
            width={width}
            height={height}
            changeWeather={changeWeather}
            changeCity={changeCity}
            changeCoords={changeCoords}
          />
        </WholeScreen>
      </div>
    );
  } else return <h1>Loading</h1>;
}

export default App;
