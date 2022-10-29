import moment from "moment";

export default function formatTime(time: string): string {
  const daylightSaving = moment().isDST() ? 1 : 0;

  const arr = time.split(":");
  arr[0] = `${parseInt(arr[0]) + daylightSaving}`;

  if (time.slice(-2) === "AM") {
    if (parseInt(arr[0]) < 10) {
      return `0${arr[0]}:${arr[1]}`;
    } else {
      return `${arr[0]}:${arr[1]}`;
    }
  } else {
    if (
      (daylightSaving && arr[0] === "13") ||
      (daylightSaving && arr[0] === "12")
    ) {
      return `${arr[0]}:${arr[1]}`;
    } else {
      const twentyFourHour = parseInt(arr[0]) + 12;
      return `${twentyFourHour}:${arr[1]}`;
    }
  }
}
