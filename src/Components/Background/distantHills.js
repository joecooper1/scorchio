import React, { useRef, useEffect, useState } from "react";

import drawHills from "../../utils/drawHills";

export default function DistantHills({ weather, time, width, height }) {
  const canvasRef = useRef(null);
  const [bgColor, setBgColor] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");

      //Draw things here
      drawHills(ctx, weather, time, height, width);
    }
  });

  //Add or remove mist
  if (
    (weather.weather[0].main === "Fog" ||
      weather.weather[0].main === "Mist" ||
      weather.weather[0].main === "Haze") &&
    bgColor === null
  ) {
    setBgColor("rgba(255, 255, 255, 0)");
  } else if (bgColor === "rgba(255, 255, 255, 0.5") {
    setBgColor("rgba(0, 0, 0, 0)");
  }

  // console.log("mist", bgColor);

  return (
    <canvas
      ref={canvasRef}
      height={height}
      width={width}
      style={{ position: "absolute", backgroundColor: bgColor }}
    ></canvas>
  );
}
