import calculateColor from "./calulateColor";

export default function drawStars(ctx, weather, time, height, width) {
  //Create array of stars
  const stars = [];

  const clouds = weather.clouds.all;

  //Add 100 stars
  for (let i = 0; i < 200 - clouds * 2; i++) {
    //Set random coordinates
    const xCoord = Math.random() * width;
    const yCoord = Math.random() * height * 0.8;
    //Set brightness
    const brightness = Math.random() * 10 - clouds / 10;
    //Set progression of count, so that flickering is not in sync
    const progression = Math.random() * 2;
    stars.push({ coords: { x: xCoord, y: yCoord }, brightness, progression });
  }

  function drawTheStars(count) {
    //Clear canvas
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < stars.length; i++) {
      const star = stars[i];
      //Fix brightness
      if (star.brightness < 0) star.brightness = 0;
      //Set draw colors
      ctx.fillStyle = `hsla(56, 89%, ${star.brightness * 10}%, ${
        Math.abs(Math.sin(count + star.progression) * star.brightness) / 10
      })`;
      ctx.shadowColor = "white";
      ctx.shadowBlur = Math.abs(
        Math.sin(count + star.progression) * star.brightness
      );
      //Draw star
      ctx.beginPath();
      ctx.arc(
        star.coords.x,
        star.coords.y,
        star.brightness / 6,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }
  }

  return drawTheStars;
}
