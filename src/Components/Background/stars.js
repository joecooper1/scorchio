import React, { useRef, useEffect } from "react";

import drawStars from "../../utils/drawStars";

export default function Stars({ weather, time, width, height }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");

      const { sunrise, sunset } = weather.sys;

      const drawTheStars = drawStars(ctx, weather, time, height, width);

      let count = 0;

      let id = null;

      //And if at night
      if (time < sunrise || time > sunset) {
        id = setInterval(() => {
          count += 0.005;
          drawTheStars(count);
        }, 30);
      } else ctx.clearRect(0, 0, width, height);

      //Clear up
      return () => {
        if (id) clearInterval(id);
      };
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
