import React, { useRef, useEffect, useState } from "react";

import drawHills from "../../utils/drawHills";

const width = window.innerWidth;
const height = window.innerHeight;

export default function DistantHills({ weather, time }) {
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

  if (
    (weather.weather[0].main === "Fog" ||
      weather.weather[0].main === "Mist" ||
      weather.weather[0].main === "Haze") &&
    bgColor === null
  ) {
    setBgColor("rgba(255, 255, 255, 0)");
  }

  console.log("mist", bgColor);

  return (
    <canvas
      ref={canvasRef}
      height={height}
      width={width}
      style={{ position: "absolute", backgroundColor: bgColor }}
    ></canvas>
  );
}
