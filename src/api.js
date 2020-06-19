import axios from "axios";

export const getWeather = (city = "Manchester,uk") => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=10a7d5cb29b8e5a868ac5018958c7c74&units=metric`
    )
    .then((result) => {
      console.log(result.data);
      return result.data;
    });
};
