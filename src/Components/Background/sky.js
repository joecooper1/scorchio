import React, { useRef, useEffect } from "react";
import calculateColor from "../../utils/calulateColor";

const width = window.innerWidth;
const height = window.innerHeight;

export default function Sky(weather) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      //Draw things from here
    }
  });

  const bgColor = calculateColor(weather);

  return (
    <canvas
      ref={canvasRef}
      height={height}
      width={width}
      style={{ backgroundColor: bgColor }}
    ></canvas>
  );
}
