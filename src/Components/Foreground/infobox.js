import React from "react";

import { Info, Temp, City, Image } from "../../styles/infobox.styles";

export default function InfoBox({ weather }) {
  return (
    <Info>
      <Temp>{Math.round(weather.main.temp)}°</Temp>
      {/* <Image
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
      ></Image> */}
      <City>{weather.name}</City>
    </Info>
  );
}
