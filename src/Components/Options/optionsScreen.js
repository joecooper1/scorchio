import React, { useState } from "react";

import { OptionsBox } from "../../styles/options.styles";

import WeatherOptions from "./weatherOptions";
import LocationOptions from "./locationOptions";

export default function OptionsScreen(props) {
  //Extract variables
  const {
    weather,
    time,
    width,
    height,
    changeWeather,
    changeCity,
    changeCoords,
  } = props;

  return (
    <OptionsBox width={width} height={height}>
      <h2>Options</h2>
      <p>Input your location, or change the weather and time manually.</p>
      <LocationOptions
        weather={weather}
        changeCity={changeCity}
        changeCoords={changeCoords}
      />
      <WeatherOptions weather={weather} changeWeather={changeWeather} />
    </OptionsBox>
  );
}
