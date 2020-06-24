import calculateColor from "./calulateColor";

export default function drawRain(
  ctx,
  type,
  windSpeed,
  width,
  height,
  weather,
  time
) {
  //Set empty array of raindrops
  const rainDrops = [];

  //Set number of raindrops to show on screen at once
  //Light drizzle options set it to 20
  let maxRainDrops = 10;
  switch (type) {
    case "light rain":
    case "shower rain":
    case "light intensity shower rain":
    case "ragged shower rain":
    case "heavy shower rain and drizzle":
    case "heavy intensity drizzle rain":
    case "heavy intensity drizzle":
    case "thunderstorm with light rain":
    case "thunderstorm with heavy drizzle":
    case "light thunderstorm":
      maxRainDrops = 30;
      break;
    case "moderate rain":
    case "freezing rain":
    case "thunderstorm with rain":
    case "ragged thunderstorm":
      maxRainDrops = 80;
      break;
    case "heavy intensity rain":
    case "very heavy rain":
    case "heavy intensity shower rain":
    case "thunderstorm with heavy rain":
    case "thunderstorm":
    case "heavy thunderstorm":
      maxRainDrops = 250;
      break;
    case "extreme rain":
      maxRainDrops = 400;
      break;
  }

  //Fill array with raindrops
  for (let i = 0; i < maxRainDrops; i++) {
    rainDrops.push({
      x: Math.random() * width,
      y: (height / maxRainDrops) * i,
    });
  }

  //Calculate rain color
  const rainColor = calculateColor(weather, time, "rain");
  //Set draw style
  ctx.strokeStyle = rainColor;
  //   ctx.strokeStyle = "red";
  ctx.lineWidth = 1;

  //Function to calculate the rain positions
  const makeItRain = () => {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < rainDrops.length; i++) {
      const drop = rainDrops[i];
      //Move drop
      drop.y += 20;
      drop.x += windSpeed / 5;
      //Check not off-screen
      if (drop.y > height) {
        drop.y = Math.random() * -30;
        drop.x = Math.random() * (width + windSpeed * 4) - windSpeed * 4;
      }
      //Draw each drop
      ctx.beginPath();
      ctx.moveTo(drop.x, drop.y);
      ctx.lineTo(drop.x + windSpeed / 5, drop.y + 10);
      ctx.stroke();
    }
  };

  return makeItRain;
}
