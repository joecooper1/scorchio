import React, { useRef, useEffect } from "react";
const { width, height } = window;

export default function Sky(weather) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      //Draw things from here
    }
  });

  return <canvas height={height} width={width}></canvas>;
}
