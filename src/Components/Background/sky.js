import React from "react";

import calculateColor from "../../utils/calulateColor";

export default function Sky({ weather, time }) {
  const bgColor = calculateColor(weather, time, "sky");

  return (
    <div
      style={{
        backgroundColor: bgColor,
        position: "absolute",
        height: "inherit",
        width: "inherit",
      }}
    ></div>
  );
}
