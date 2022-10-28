export default function formatTime(time: string): string {
  if (time.slice(-2) === "AM") {
    const arr = time.split(":");
    if (parseInt(arr[0]) < 10) {
      return `0${time.slice(0, 4)}`;
    } else {
      return time.slice(0, 5);
    }
  } else {
    const arr = time.split(":");
    const twentyFourHour = parseInt(arr[0]) + 12;
    return `${twentyFourHour}:${arr[1]}`;
  }
}
