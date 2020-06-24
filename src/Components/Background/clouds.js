import React, { useRef, useEffect, useState } from "react";

import drawClouds from "../../utils/drawClouds";

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

      const id = setInterval(() => {
        moveClouds();
        drawTheClouds();
      }, 30);
      //Draw things here
      // if (weather.clouds.all > 0) {
      //   const id = drawClouds(ctx, weather, time, height, width);
      // }
      return () => clearInterval(id);
    }

    // return () => clearInterval(id);
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
