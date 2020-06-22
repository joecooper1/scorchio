import calculateColor from "./calulateColor";

export default function drawHills(ctx, weather, time, height, width) {
  //Calculate ground color
  const bgColor = calculateColor(weather, time, "hills");

  //Set drawing style
  ctx.lineJoin = ctx.lineCap = "round";
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.fillStyle = bgColor;

  //Set units of measurement
  const w = width / 100;
  const h = height / 200;

  //Set points
  ctx.beginPath();
  ctx.moveTo(0 * w, 130 * h);

  //Draw waves, with jagged variation
  for (let i = 0; i < width + 30; i += Math.random() * 20 + 10) {
    ctx.lineTo(
      i,
      120 * w + Math.sin(i / 60 - 1.7) * 50 + (Math.random() * 10 - 5)
    );
  }

  //Close path
  ctx.lineTo(100 * w, 200 * h);
  ctx.lineTo(0 * w, 200 * h);
  ctx.lineTo(0 * w, 130 * h);

  //   ctx.stroke();
  ctx.fill();
}
