import React, { useState, useEffect } from "react";

import {
  Info,
  Temp,
  City,
  Time,
  CityContainer,
  Pencil
} from "../../styles/infobox.styles";

import calculateColor from "../../utils/calulateColor";

export default function InfoBox(props) {
  const [location, setLocation] = useState(props.weather.name);

  useEffect(() => {
    setLocation(props.weather.name);
  }, [props]);

  //Extract values from props
  let { weather, time, width, height, hour, minute, changeCity } = props;

  //Function to change input value when typing
  function changeValueLocation(event) {
    setLocation(event.target.value);
  }

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
      <CityContainer>
        <City
          value={location}
          onChange={changeValueLocation}
          onBlur={() => changeCity(location)}
        ></City>
        <Pencil>{"\u270E"}</Pencil>
      </CityContainer>
      <Time>
        Last updated {hour}:{minute}
      </Time>
    </Info>
  );
}
