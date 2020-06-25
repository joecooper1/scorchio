import React, { useState, useEffect } from "react";

import {
  LocationOptionBox,
  NumberInput,
  OrString,
} from "../../styles/options.styles";

export default function LocationOptions(props) {
  const [newCity, setNewCity] = useState(props.weather.name);
  const [newLatitude, setNewLatitude] = useState(props.weather.coord.lat);
  const [newLongitude, setNewLongitude] = useState(props.weather.coord.lon);

  useEffect(() => {
    setNewLatitude(props.weather.coord.lat);
    setNewLongitude(props.weather.coord.lon);
    setNewCity(props.weather.name);
  }, [props]);

  function changeCity(event) {
    setNewCity(event.target.value);
  }

  function changeLatitude(event) {
    setNewLatitude(event.target.value);
  }

  function changeLongitude(event) {
    setNewLongitude(event.target.value);
  }

  return (
    <LocationOptionBox>
      <label>
        City:{" "}
        <input type="string" onChange={changeCity} value={newCity}></input>
      </label>
      <button
        onClick={() => {
          props.changeCity(newCity);
        }}
      >
        Go
      </button>
      <OrString>- or -</OrString>
      <label>
        Latitude:{" "}
        <NumberInput
          onChange={changeLatitude}
          value={newLatitude}
        ></NumberInput>
      </label>
      <label>
        Longitude:{" "}
        <NumberInput
          onChange={changeLongitude}
          value={newLongitude}
        ></NumberInput>
      </label>
      <button
        onClick={() => {
          props.changeCoords(newLatitude, newLongitude);
        }}
      >
        Go
      </button>
    </LocationOptionBox>
  );
}
