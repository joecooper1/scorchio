import React, { useState, useEffect } from "react";

import {
  Info,
  Temp,
  City,
  Time,
  CityContainer,
  Pencil,
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

  //Function to handle blur input event
  function blurInput(event) {
    //If field is empty, revert to previous city
    if (location === "") {
      setLocation(weather.name);
    } else {
      changeCity(location);
    }
  }

  //If hour is not integer
  if (hour % 1 !== 0) {
    //Calculate extra mins
    const extraMins = (hour % 1) * 60;
    //Floor hour
    hour = Math.floor(hour);
    //Add extra mins to mins
    minute += extraMins;
    //If minutes is over 60
    if (minute >= 60) {
      minute -= 60;
      hour += 1;
    }
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
          onBlur={blurInput}
          onFocus={() => {
            setLocation("");
          }}
        ></City>
        <Pencil>{"\u270E"}</Pencil>
      </CityContainer>
      <Time>
        Last updated {hour}:{minute}
      </Time>
    </Info>
  );
}
