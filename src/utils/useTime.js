export default function useTime() {
  //Get time of day
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  //Add 3600 for each hour
  let time = Math.round(now.getTime() / 1000);
  return time;
}
