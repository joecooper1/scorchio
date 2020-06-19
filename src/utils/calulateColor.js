export default function calculateColor(weather, time) {
  //Calculate cloudiness
  const clouds = weather.clouds.all;

  const { sunrise, sunset } = weather.sys;
  const midday = sunrise + (sunset - sunrise) / 2;

  //Calculate transition time aka how long dawn and dusk last
  const lat = weather.coord.lat;
  const transition = (10 + lat / 2) * 60;

  //Set hue
  let hue = 175;

  //Calculate light, should be 40 at dawn and dusk, 80 in day, 10 at night
  let light = 50;
  if (time < sunrise - transition) {
    //If before pre-dawn
    light = 10;
  } else if (time < sunrise) {
    //If pre-dawn
    light = 10 + ((transition - (sunrise - time)) / transition) * 30;
  } else if (time < sunrise + transition && time <= midday) {
    //If dawn, and before midday (this is to stop dawn extending longer than the day in high lats)
    light = 40 + ((transition - (time - sunrise)) / transition) * 40;
  } else if (time < sunset - transition) {
    //If daytime
    light = 80;
  } else if (time < sunset) {
    //If dusk
    light = 80 - ((transition - (sunset - time)) / transition) * 40;
  } else if (time < sunset + transition) {
    //If post-dusk
    light = 40 - ((transition - (time - sunset)) / transition) * 30;
  } else {
    //If night
    light = 10;
  }
  //Factor in clouds
  light -= clouds * 0.15;
  if (light < 10) light = 10;

  //Calculate saturation
  const saturation = 75 - clouds * 0.5;

  console.log(hue, saturation, light);

  return `hsl(${hue}, ${saturation}%, ${light}%)`;
}
