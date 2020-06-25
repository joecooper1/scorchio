import React, { useRef, useEffect } from "react";
import drawLightning from "../../utils/drawLightning";

export default function Lightning({ weather, time, width, height }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");

      const illuminate = drawLightning(ctx, width, height);

      let id = null;

      if (weather.weather[0].main === "Thunderstorm") {
        id = setInterval(() => {
          //Set random counter to feed into function
          const counter = Math.random();
          illuminate(counter);
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
