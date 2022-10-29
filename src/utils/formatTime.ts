import moment from "moment";

export default function formatTime(time: string): string {
  const daylightSaving = moment().isDST() ? 1 : 0;

  const arr = time.split(":");
  arr[0] = `${parseInt(arr[0]) + daylightSaving}`;

  //Morning UTC
  if (time.slice(-2) === "AM") {
    //Convert 12AM to 24hr
    if (!daylightSaving && arr[0] === "12") {
      return `00:${arr[1]}`;
    } else if (daylightSaving && arr[0] === "13") {
      return `01:${arr[1]}`;
    }

    //Before 10 morning UTC add padding
    if (parseInt(arr[0]) < 10) {
      return `0${arr[0]}:${arr[1]}`;
    } else {
      return `${arr[0]}:${arr[1]}`;
    }
  } else {
    //All UTC PM
    if (!daylightSaving && arr[0] === "12") {
      return `12:${arr[1]}`;
    } else if (daylightSaving && arr[0] === "13") {
      return `13:${arr[1]}`;
    } else if (daylightSaving && arr[0] === "12") {
      return `00:${arr[1]}`;
    } else {
      const twentyFourHour = parseInt(arr[0]) + 12;
      return `${twentyFourHour}:${arr[1]}`;
    }
  }
}
