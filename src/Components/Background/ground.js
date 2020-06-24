import React, { useRef, useEffect, useState } from "react";

import drawGround from "../../utils/drawGround";

export default function Ground({ weather, time, width, height }) {
  const canvasRef = useRef(null);
  const [bgColor, setBgColor] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");

      //Draw things here
      drawGround(ctx, weather, time, height, width);
    }
  });

  //Add or remove mist
  if (
    (weather.weather[0].main === "Fog" ||
      weather.weather[0].main === "Mist" ||
      weather.weather[0].main === "Haze") &&
    bgColor === null
  ) {
    setBgColor("rgba(255, 255, 255, 0.5)");
  } else if (bgColor === "rgba(255, 255, 255, 0.5") {
    setBgColor("rgba(0, 0, 0, 0)");
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
