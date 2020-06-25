export default function drawRainbow(ctx, width, height) {
  function drawTheRainbow() {
    //Clear canvas
    // ctx.clearRect(0, 0, width, height);

    //Declar colors
    const colors = [
      "rgba(255, 0, 0, 0.15)",
      "rgba(255, 166, 0, 0.15)",
      "rgba(255, 255, 0, 0.15)",
      "rgba(0, 255, 0, 0.15)",
      "rgba(0, 0, 255, 0.15)",
      "rgba(75, 0, 130, 0.15)",
      "rgba(148, 0, 211, 0.15)",
    ];

    //Declar lineWidth
    ctx.lineWidth = 8;

    for (let i = 0; i < colors.length; i++) {
      const color = colors[i];
      const gradient = ctx.createLinearGradient(
        0,
        height * 0.65,
        0,
        height * 0.65 - 250
      );
      gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
      gradient.addColorStop(1, color);
      ctx.strokeStyle = gradient;
      //Draw ring
      ctx.beginPath();
      ctx.arc(width, height * 0.65, 250 - i * 8, 0, Math.PI, true);
      ctx.stroke();
    }
  }

  return drawTheRainbow;
}
