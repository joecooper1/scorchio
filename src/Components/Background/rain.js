import React, { useRef, useEffect, useState } from "react";

import drawRain from "../../utils/drawRain";

export default function Rain({ weather, time, width, height }) {
  const canvasRef = useRef(null);
  const [bgColor, setBgColor] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");

      //Artificially change weather
      // weather.weather[0].main = "Rain";
      // weather.weather[0].description = "light rain";

      //If rain or drizzle
      if (
        weather.weather[0].main === "Rain" ||
        weather.weather[0].main === "Drizzle" ||
        weather.weather[0].main === "Thunderstorm"
      ) {
        drawRain(
          ctx,
          weather.weather[0].description,
          weather.wind.speed,
          width,
          height,
          weather,
          time
        );
      }

      //Draw things from here
    }
  });

  if (
    (weather.weather[0].main === "Fog" ||
      weather.weather[0].main === "Mist" ||
      weather.weather[0].main === "Haze") &&
    bgColor === null
  ) {
    setBgColor("rgba(255, 255, 255, 0.5)");
  }

  return (
    <canvas
      ref={canvasRef}
      height={height}
      width={width}
      style={{ position: "absolute", backgroundColor: bgColor }}
    ></canvas>
  );
}
