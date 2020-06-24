import axios from "axios";

export const getWeather = (city = "Manchester", country, lat, lon) => {
  //Determine location
  let location = "";
  if (lat && lon) {
    location = `lat=${lat}&lon=${lon}`;
  } else {
    location = `q=${city}`;
  }
  //Call api
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?${location}&appid=10a7d5cb29b8e5a868ac5018958c7c74&units=metric`
    )
    .then((result) => {
      return result.data;
    })
    .catch((err) => {
      return "error";
    });
};

export const getHourlyForecast = (lat, lon) => {
  //Determine location
  let location = "";
  if (lat && lon) {
    location = `lat=${lat}&lon=${lon}`;
  }
  //Call api
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?${location}&appid=10a7d5cb29b8e5a868ac5018958c7c74&units=metric`
    )
    .then((result) => {
      console.log(result.data);
    })
    .catch((err) => {
      return "error";
    });
};
