import calculateColor from "./calulateColor";

export default function drawClouds(ctx, weather, time, height, width) {
  let clouds = weather.clouds.all;

  //Get windspeed
  const windSpeed = weather.wind.speed / 2;

  //Determine number of clouds
  const cloudNum = Math.round(clouds / 20);

  //Determine how grey the clouds are
  let rainLevel = weather.rain ? weather.rain["1h"] : 0;

  const bottomOfCloud = calculateColor(weather, time, "cloudsBottom");
  const topOfCloud = calculateColor(weather, time, "cloudsTop");

  //Create array of x positions to choose from - ensures no cloud is exactly abov another
  const xPosition = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];

  //Create clouds
  const cloudArray = [];
  for (let i = 0; i < cloudNum; i++) {
    //Determine random starting x and y coord
    //X coord must be on the screen or slightly to the left
    const xPos = xPosition.splice(
      Math.floor(Math.random() * xPosition.length),
      1
    );
    const xCoord = xPos * (width + 100) - 100;
    //Y coords must be spaced out along the top 60% of the screen
    const yCoord = ((height * 0.7) / cloudNum) * i + 50;
    //Determine size
    const cloudSize = 200 - 10 * i + clouds;
    //Determine gap between cloud and next cloud
    const gap = Math.random() * (width / 3) + width * 0.6;
    cloudArray.push({
      coords: { x: xCoord, y: yCoord },
      size: cloudSize,
      gap: gap,
    });
  }

  function moveClouds() {
    for (let i = 0; i < cloudArray.length; i++) {
      const cloud = cloudArray[i];
      //Move x coord to the right based on windspeed
      cloud.coords.x += windSpeed / 65 + i / 65;
      //If x coord goes off screen, make x coord = the second x coord
      if (cloud.coords.x > width) cloud.coords.x -= width / 2 + cloud.gap;
    }
  }

  function drawTheClouds() {
    //Clear
    ctx.clearRect(0, 0, width, height);
    //Loop through clouds
    for (let i = cloudArray.length - 1; i >= 0; i--) {
      const cloud = cloudArray[i];
      let x = cloud.coords.x;
      const y = cloud.coords.y;
      //Set colors
      const grd = ctx.createLinearGradient(x, y + 10, x, y - 30);
      grd.addColorStop(0, bottomOfCloud);
      grd.addColorStop(1, topOfCloud);
      ctx.fillStyle = grd;
      //Stroke
      ctx.strokeStyle = grd;
      ctx.lineWidth = 1;
      //Draw cloud
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + cloud.size, y);
      ctx.arcTo(
        x + cloud.size * 0.95,
        y - cloud.size * 0.8,
        x + cloud.size * 0.9,
        y - cloud.size * 0.1,
        cloud.size * 0.05
      );
      ctx.arcTo(
        x + cloud.size * 0.8,
        y - cloud.size * 0.9,
        x + cloud.size * 0.6,
        y - cloud.size * 0.1,
        cloud.size * 0.15
      );
      ctx.arcTo(
        x + cloud.size * 0.55,
        y - cloud.size * 0.6,
        x + cloud.size * 0.4,
        y - cloud.size * 0.08,
        cloud.size * 0.1
      );
      ctx.arcTo(
        x + cloud.size * 0.35,
        y - cloud.size * 0.3,
        x + cloud.size * 0.3,
        y - cloud.size * 0.07,
        cloud.size * 0.055
      );
      ctx.lineTo(x, y);
      ctx.fill();
      ctx.stroke();

      //Draw lines to show angles
      if (true === false) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + cloud.size, y);
        ctx.lineTo(x + cloud.size * 0.95, y - cloud.size * 0.8);
        ctx.lineTo(x + cloud.size * 0.9, y - cloud.size * 0.1);
        ctx.lineTo(x + cloud.size * 0.8, y - cloud.size * 0.9);
        ctx.lineTo(x + cloud.size * 0.6, y - cloud.size * 0.1);
        ctx.lineTo(x + cloud.size * 0.55, y - cloud.size * 0.6);
        ctx.lineTo(x + cloud.size * 0.4, y - cloud.size * 0.08);
        ctx.lineTo(x + cloud.size * 0.35, y - cloud.size * 0.3);
        ctx.lineTo(x + cloud.size * 0.3, y - cloud.size * 0.07);
        ctx.lineTo(x, y);
        ctx.stroke();
      }

      //Move xCoord for the second cloud
      let x2 = x;
      if (x < width / 2) x2 += width / 2 + cloud.gap;
      else x2 -= width / 2 + cloud.gap;

      //Draw second cloud
      ctx.beginPath();
      ctx.moveTo(x2, y);
      ctx.lineTo(x2 + cloud.size, y);
      ctx.arcTo(
        x2 + cloud.size * 0.95,
        y - cloud.size * 0.8,
        x2 + cloud.size * 0.9,
        y - cloud.size * 0.1,
        cloud.size * 0.05
      );
      ctx.arcTo(
        x2 + cloud.size * 0.8,
        y - cloud.size * 0.9,
        x2 + cloud.size * 0.6,
        y - cloud.size * 0.1,
        cloud.size * 0.15
      );
      ctx.arcTo(
        x2 + cloud.size * 0.55,
        y - cloud.size * 0.6,
        x2 + cloud.size * 0.4,
        y - cloud.size * 0.08,
        cloud.size * 0.1
      );
      ctx.arcTo(
        x2 + cloud.size * 0.35,
        y - cloud.size * 0.3,
        x2 + cloud.size * 0.3,
        y - cloud.size * 0.07,
        cloud.size * 0.055
      );
      ctx.lineTo(x2, y);
      ctx.fill();
      ctx.stroke();
    }
  }

  setInterval(() => {
    moveClouds();
    drawTheClouds();
  }, 30);
}
