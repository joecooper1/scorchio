import calculateColor from "./calulateColor";

export default function drawSnow(ctx, weather, time, height, width) {
  //Make array of snowflakes
  const flakes = [];

  //Extract type and windspeed
  const type = weather.weather[0].description;
  const windspeed = weather.wind.speed;

  //Set number of flakes on screen at once
  let maxFlakes = 10;
  switch (type) {
    case "snow":
    case "sleet":
    case "shower sleet":
    case "rain and snow":
    case "shower snow":
      maxFlakes = 40;
      break;
    case "heavy snow":
    case "heavy shower snow":
      maxFlakes = 80;
      break;
  }

  //Fill array with flakes
  for (let i = 0; i < maxFlakes; i++) {
    //Calculate x coordinate
    const xCoord = Math.random() * width;
    //Calculate y coordinate
    const yCoord = (height / maxFlakes) * i;
    //Calculate size
    const size = Math.random() * 3 + 1;
    //Calculate progression - ensures snow swerving is not in sync
    const progression = Math.random() * 4 - 2;
    flakes.push({ coords: { x: xCoord, y: yCoord }, size, progression });
  }

  //Set colors
  ctx.fillStyle = calculateColor(weather, time, "snow");

  //Function to calculate snow positions
  function letItSnow() {
    //Clear canvas
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < flakes.length; i++) {
      const flake = flakes[i];
      //Move flake
      flake.coords.y += 2;
      flake.coords.x += windspeed / 6 + Math.sin(flake.progression);
      flake.progression += 0.02;
      //Check not off-screen
      if (flake.coords.y > height) {
        flake.coords.y = Math.random() * -30;
        flake.size = Math.random() * 3 + 1;
      }
      if (flake.coords.x > width) {
        flake.coords.x = Math.random() * -10;
        flake.size = Math.random() * 3 + 1;
      }
      //Draw each flake
      ctx.beginPath();
      ctx.arc(flake.coords.x, flake.coords.y, flake.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  setInterval(() => {
    letItSnow();
  }, 30);
}
