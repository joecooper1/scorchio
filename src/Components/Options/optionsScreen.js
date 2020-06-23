import React, { useState } from "react";

import { OptionsBox } from "../../styles/options.styles";

import WeatherOptions from "./weatherOptions";

export default function OptionsScreen(props) {
  //Extract variables
  const { weather, time, width, height, changeWeather } = props;

  return (
    <OptionsBox width={width} height={height}>
      <h2>Options</h2>
      <p>Input your location, or change the weather and time by hand.</p>
      <WeatherOptions weather={weather} changeWeather={changeWeather} />
    </OptionsBox>
  );
}
