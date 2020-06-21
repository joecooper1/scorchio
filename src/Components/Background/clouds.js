import React, { useRef, useEffect } from "react";

import drawClouds from "../../utils/drawClouds";

const width = window.innerWidth;
const height = window.innerHeight;

export default function Clouds({ weather, time }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");

      //Draw things here
      if (weather.clouds.all > 0) {
        drawClouds(ctx, weather, time, height, width);
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
