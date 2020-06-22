import React, { useRef, useEffect } from "react";

import drawSnow from "../../utils/drawSnow";

const width = window.innerWidth;
const height = window.innerHeight;

export default function Snow({ weather, time }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");

      //Draw things here
      if (weather.weather[0].main === "Snow") {
        drawSnow(ctx, weather, time, height, width);
      }
    }
  });

  return (
    <canvas
      ref={canvasRef}
      height={height}
      width={width}
      style={{ position: "absolute" }}
    ></canvas>
  );
}
