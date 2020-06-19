import React from "react";

import { Info } from "../../styles/infobox.styles";

export default function InfoBox({ weather }) {
  return (
    <Info>
      <h1>{weather.name}</h1>
      <h2>{Math.round(weather.main.temp)}°</h2>
    </Info>
  );
}
