import React from "react";

import { Info, Temp, City } from "../../styles/infobox.styles";

export default function InfoBox({ weather }) {
  return (
    <Info>
      <Temp>{Math.round(weather.main.temp)}°</Temp>
      <City>{weather.name}</City>
    </Info>
  );
}
