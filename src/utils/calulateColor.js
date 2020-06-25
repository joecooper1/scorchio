export default function calculateColor(weather, time, type) {
  //Calculate cloudiness
  const clouds = weather.clouds.all;

  const { sunrise, sunset } = weather.sys;
  const midday = sunrise + (sunset - sunrise) / 2;

  //Calculate transition time aka how long dawn and dusk last
  const lat = weather.coord.lat;
  const transition = (10 + lat / 2) * 60;

  //Set hue
  let hue = 0;
  if (type === "sky") hue = 175;
  if (type === "hills") hue = 175;
  if (type === "rain") hue = 175;
  if (type === "cloudsTop" || type === "cloudsBottom") hue = 194;
  if (type === "snow") hue = 175;
  if (type === "ground") hue = 135;

  //Calculate saturation
  let saturation = 75 - clouds * 0.5;

  //Calculate light, should be 40 at dawn and dusk, 80 in day, 10 at night
  let light = 50;
  if (time < sunrise - transition) {
    //If before pre-dawn
    // console.log("night");
    light = 10;
  } else if (time < sunrise) {
    //If pre-dawn
    // console.log("pre-dawn");
    light = 10 + ((transition - (sunrise - time)) / transition) * 30;
  } else if (time < sunrise + transition && time <= midday) {
    //If dawn, and before midday (this is to stop dawn extending longer than the day in high lats)
    // console.log("dawn");
    light = 40 + (40 - ((transition - (time - sunrise)) / transition) * 40);
  } else if (time < sunset - transition || sunset === 0) {
    //If daytime
    // console.log("daytime");
    light = 80;
  } else if (time < sunset) {
    //If dusk
    // console.log("dusk");
    light = 80 - ((transition - (sunset - time)) / transition) * 40;
  } else if (time < sunset + transition) {
    //If post-dusk
    // console.log("post-dusk");
    light = 40 - (30 - ((transition - (time - sunset)) / transition) * 30);
  } else {
    //If night
    // console.log("night");
    light = 10;
  }

  //Factor in clouds
  light -= clouds * 0.18;
  if (light < 10) light = 10;

  if (type === "sky") saturation -= clouds * 0.2;

  //Make hills darker
  if (type === "hills") {
    light -= 40;
    if (light < 5) light = 5;
  }

  //Make ground darker
  if (type === "ground") {
    light -= 50;
  }

  //Make snow lighter
  if (type === "snow") {
    light += 60;
  }

  //Make rain contrast
  if (type === "rain") {
    if (light < 50) {
      light += 40;
    } else {
      light -= 40;
    }
  }

  //Change text color
  if (type === "text") {
    if (light < 30) light = 100;
    else light = 0;
  }

  //Make clouds darker at night
  if (type === "cloudsTop") {
    saturation = 5;
    //If night
    if (light === 10) light = 5;
    else {
      light = light + 75 - clouds * 0.6;
      if (light < 5) light = 5;
    }
  }
  if (type === "cloudsBottom") {
    saturation = 5;
    //If night
    if (light === 10) light = 0;
    else {
      let rainLevel = weather.rain ? weather.rain["1h"] : 0;
      light = light + 25 - clouds * 0.6 - rainLevel * 10;
      if (light < 0) light = 0;
    }
  }

  //Change saturation of hills
  if (type === "hills") {
    saturation -= 20;
  }

  //Change saturation of ground
  if (type === "ground") {
    saturation -= 20;
  }

  console.log(type, hue, saturation, light);

  return `hsl(${hue}, ${saturation}%, ${light}%)`;
}
