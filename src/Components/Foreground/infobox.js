import React from "react";

import { Info, Temp, City, Image, Time } from "../../styles/infobox.styles";

import calculateColor from "../../utils/calulateColor";

export default function InfoBox({
  weather,
  time,
  width,
  height,
  hour,
  minute,
}) {
  //Add 0 to numbers if single digits
  if (minute < 10) {
    minute = `0${minute}`;
  }
  if (hour < 10) {
    hour = `0${hour}`;
  }

  //Get text color
  const textColor = calculateColor(weather, time, "text");

  return (
    <Info width={width} height={height} color={textColor}>
      <Temp>{Math.round(weather.main.temp)}°</Temp>
      {/* <Image
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
      ></Image> */}
      <City>{weather.name}</City>
      <Time>
        Last updated {hour}:{minute}
      </Time>
    </Info>
  );
}
