import React, { useRef, useEffect } from "react";

import drawSnow from "../../utils/drawSnow";

export default function Snow({ weather, time, width, height }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");

      const letItSnow = drawSnow(ctx, weather, time, height, width);

      let id = null;

      //Draw things here
      if (weather.weather[0].main === "Snow") {
        id = setInterval(() => {
          letItSnow();
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
