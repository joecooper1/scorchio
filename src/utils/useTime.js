export default function useTime(customTime, weather) {
  //Set timezone if weather object exists
  const timezone = weather ? weather.timezone - 3600 : 0;

  //Initialise variabless
  let now;
  let hour;
  let time;

  if (customTime) {
    //If time is set manually
    //Make new date object based on customTime given
    now = new Date(customTime * 1000);
    //Get hour data
    hour = now.getHours();
    if (hour >= 24) {
      hour -= 24;
      // time -= 3600 * 24;
    }
    //Get time data
    time = Math.round(now.getTime() / 1000);
    //If on other side of world, reduce/increase time
    if (timezone < -21600) time += 21600;
    if (timezone > 21600) time -= 21600;
  } else {
    //If time comes from location
    now = new Date();
    //Add hours based on timezone
    hour = now.getHours() + timezone / 3600;
    //Get time data
    time = Math.round(now.getTime() / 1000) + timezone;
    //If next day
    if (hour >= 24) {
      hour -= 24;
      time -= 3600 * 24;
    }
    //If on other side of world, reduce/increase time
    if (timezone < -21600) time += 21600;
    if (timezone > 21600) time -= 21600;
  }

  //Get minutes
  const minute = now.getMinutes();
  //Work out when midnight was
  const midnight = time - (time % 60) - hour * 3600 - minute * 60;

  console.log(time % 1593000000, hour, minute, midnight % 1593000000);

  return { time, hour, minute, midnight };
}
