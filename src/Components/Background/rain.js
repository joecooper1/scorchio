import React, { useRef, useEffect, useState } from "react";

import drawRain from "../../utils/drawRain";

export default function Rain({ weather, time, width, height }) {
  const canvasRef = useRef(null);
  const [bgColor, setBgColor] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");

      const makeItRain = drawRain(
        ctx,
        weather.weather[0].description,
        weather.wind.speed,
        width,
        height,
        weather,
        time
      );

      let id = null;

      //If rain or drizzle or storm
      if (
        weather.weather[0].main === "Rain" ||
        weather.weather[0].main === "Drizzle" ||
        weather.weather[0].main === "Thunderstorm"
      ) {
        id = setInterval(() => {
          makeItRain();
        }, 30);
      } else ctx.clearRect(0, 0, width, height);

      //Clear up
      return () => {
        if (id) clearInterval(id);
      };
    }
  });

  //Add or remove mist
  if (
    weather.weather[0].main === "Fog" ||
    weather.weather[0].main === "Mist" ||
    weather.weather[0].main === "Haze"
  ) {
    if (bgColor === null) setBgColor("rgba(255, 255, 255, 0.3)");
  } else if (bgColor === "rgba(255, 255, 255, 0.3)") {
    setBgColor("rgba(255, 0, 0, 0)");
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
