import React, { useRef, useEffect } from "react";

import drawClouds from "../../utils/drawClouds";
import drawRainbow from "../../utils/drawRainbow";

export default function Clouds({ weather, time, width, height }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");

      const { moveClouds, drawTheClouds } = drawClouds(
        ctx,
        weather,
        time,
        height,
        width
      );

      const drawTheRainbow = drawRainbow(ctx, width, height);

      const id = setInterval(() => {
        moveClouds();
        drawTheClouds();
        //If rain and not too many clouds, and daylight
        if (weather.clouds.all < 50 && weather.weather[0].main === "Rain")
          if (time < weather.sys.sunset && time > weather.sys.sunrise)
            drawTheRainbow();
      }, 30);

      return () => clearInterval(id);
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
