export default function useTime(customTime) {
  //Get time of day
  let now;
  if (customTime) now = new Date(customTime * 1000);
  else now = new Date();
  //Get hours and minutes
  const hour = now.getHours();
  const minute = now.getMinutes();
  //Add 3600 for each hour
  let time = Math.round(now.getTime() / 1000);
  //Work out when midnight was
  const midnight = time - (time % 60) - hour * 3600 - minute * 60;

  return { time, hour, minute, midnight };
}
