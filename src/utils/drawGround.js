import calculateColor from "./calulateColor";

export default function drawGround(ctx, weather, time, height, width) {
  //Clear canvas
  ctx.clearRect(0, 0, width, height);

  //Calculate ground color
  const bgColor = calculateColor(weather, time, "ground");

  //Set drawing style
  ctx.fillStyle = bgColor;

  //Set units of measurement
  const w = width / 100;
  const h = height / 200;

  //Set points
  ctx.beginPath();
  ctx.moveTo(0 * w, 130 * h);

  //Draw waves
  for (let i = 0; i <= width; i += 4) {
    ctx.lineTo(
      i,
      140 * h + Math.sin(i / 35) * 10 + ((i / 4) % 2) * 30 + Math.random() * 10
    );
  }

  //Close path
  ctx.lineTo(100 * w, 200 * h);
  ctx.lineTo(0 * w, 200 * h);
  ctx.lineTo(0 * w, 130 * h);

  //   ctx.stroke();
  ctx.fill();
}
