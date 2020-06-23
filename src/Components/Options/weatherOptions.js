import React, { useState } from "react";

export default function WeatherOptions(props) {
  const [newValues, setNewValues] = useState({
    "weather[0].main": props.weather.weather[0].main,
    "weather[0].description": props.weather.weather[0].description,
    "wind.speed": props.weather.wind.speed,
    "clouds.all": props.weather.clouds.all,
  });

  console.log(newValues);

  //All options for weather type
  const weatherTypes = ["Rain", "Thunderstorm", "Snow", "Mist"];

  //All options for weather descriptions
  const weatherDescriptions = {
    Rain: ["drizzle", "moderate rain", "heavy rain", "extreme rain"],
    Thunderstorm: ["light thunderstorm", "thunderstorm", "heavy thunderstorm"],
    Snow: ["light snow", "snow", "heavy snow"],
    Mist: [],
    Clouds: [],
    Clear: [],
    Fog: [],
    Drizzle: [],
  };

  //Function to change main weather
  function changeMain(event) {
    //Create a shallow copy
    const newNewValues = { ...newValues };
    //If main weather type has changed, also change the description
    if (event.target.value !== newNewValues["weather[0].main"]) {
      newNewValues["weather[0].description"] =
        weatherDescriptions[event.target.value][0];
    }
    //Change the values given
    newNewValues["weather[0].main"] = event.target.value;
    //Set newValues
    setNewValues(newNewValues);
  }

  //Function to change the weather description
  function changeIntensity(event) {
    //Create a shallow copy
    const newNewValues = { ...newValues };
    //Change the values given
    newNewValues["weather[0].description"] = event.target.value;
    //Set newValues
    setNewValues(newNewValues);
  }

  function changeWind(event) {
    //Create a shallow copy
    const newNewValues = { ...newValues };
    //Check range
    let wind = event.target.value;
    if (wind < 0) wind = 0;
    if (wind > 50) wind = 50;
    //Change the values given
    newNewValues["wind.speed"] = wind;
    //Set newValues
    setNewValues(newNewValues);
  }

  function changeClouds(event) {
    //Create a shallow copy
    const newNewValues = { ...newValues };
    //Check range
    let clouds = event.target.value;
    if (clouds < 0) clouds = 0;
    if (clouds > 100) clouds = 100;
    //Change the values given
    newNewValues["clouds.all"] = clouds;
    //Set newValues
    setNewValues(newNewValues);
  }

  return (
    <nav style={{ backgroundColor: "red" }}>
      <label>
        Weather Type:{" "}
        <select onChange={changeMain}>
          <option hidden></option>
          {weatherTypes.map((type) => {
            return <option key={type}>{type}</option>;
          })}
        </select>
      </label>
      <label>
        Intensity:{" "}
        <select onChange={changeIntensity}>
          <option hidden></option>
          {weatherDescriptions[newValues["weather[0].main"]].map(
            (description) => {
              return <option key={description}>{description}</option>;
            }
          )}
        </select>
      </label>
      <label>
        Cloud cover (0-100):{" "}
        <input value={newValues["clouds.all"]} onChange={changeClouds}></input>
      </label>
      <label>
        Wind speed (0-50):{" "}
        <input onChange={changeWind} value={newValues["wind.speed"]}></input>
      </label>
      <button
        onClick={() => {
          props.changeWeather(newValues);
        }}
      >
        Go
      </button>
    </nav>
  );
}
