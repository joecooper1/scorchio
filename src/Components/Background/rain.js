import React, { useRef, useEffect } from "react";

import calculateColor from "../../utils/calulateColor";
import drawRain from "../../utils/drawRain";

const width = window.innerWidth;
const height = window.innerHeight;

export default function Rain({ weather, time }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");

      //Artificially change weather
      //   weather.weather[0].main = "Rain";
      //   weather.weather[0].description = "light rain";

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
          height
        );
      }

      //Draw things from here
    }
  });

  const bgColor = calculateColor(weather, time);

  return (
    <canvas
      ref={canvasRef}
      height={height}
      width={width}
      style={{ backgroundColor: bgColor, position: "absolute" }}
    ></canvas>
  );
}
