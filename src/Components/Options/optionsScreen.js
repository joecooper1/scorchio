import React from "react";

import { OptionsBox } from "../../styles/options.styles";

import WeatherOptions from "./weatherOptions";
import LocationOptions from "./locationOptions";
import TimeOptions from "./timeOptions";
import JsonConverter from "../JSONShit/jsonconverter";

export default function OptionsScreen(props) {
  //Extract variables
  const {
    weather,
    time,
    hour,
    minute,
    width,
    height,
    changeWeather,
    changeCity,
    changeCoords,
    changeCustomTime,
  } = props;

  return (
    <OptionsBox width={width} height={height}>
      <h1>Scorchio</h1>
      <p>A prototype design for a 'live' weather app.</p>
      <h3>Options</h3>
      <p>Input your location, or change the weather manually.</p>
      <LocationOptions
        weather={weather}
        changeCity={changeCity}
        changeCoords={changeCoords}
      />
      {/* <TimeOptions
        hour={hour}
        minute={minute}
        time={time}
        changeCustomTime={changeCustomTime}
      ></TimeOptions> */}
      <WeatherOptions weather={weather} changeWeather={changeWeather} />
      <JsonConverter />
    </OptionsBox>
  );
}
