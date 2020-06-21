import React, { useRef, useEffect } from "react";

import drawHills from "../../utils/drawHills";

const width = window.innerWidth;
const height = window.innerHeight;

export default function DistantHills({ weather, time }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");

      //Draw things here
      drawHills(ctx, weather, time, height, width);
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
