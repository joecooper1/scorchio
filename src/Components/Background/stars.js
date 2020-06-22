import React, { useRef, useEffect } from "react";

import drawStars from "../../utils/drawStars";

const width = window.innerWidth;
const height = window.innerHeight;

export default function Stars({ weather, time }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");

      //Draw things here

      const { sunrise, sunset } = weather.sys;
      //And if at night
      if (time < sunrise || time > sunset)
        drawStars(ctx, weather, time, height, width);
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
