import React from "react";

import calculateColor from "../../utils/calulateColor";

const width = window.innerWidth;
const height = window.innerHeight;

export default function Sky({ weather, time }) {
  const bgColor = calculateColor(weather, time, "sky");

  return (
    <div
      style={{
        backgroundColor: bgColor,
        position: "absolute",
        height: height,
        width: width,
      }}
    ></div>
  );
}
