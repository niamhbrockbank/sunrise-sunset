import moment from "moment";
import { useEffect, useState } from "react";
import { ILocation, IResults } from "../types";
import formatTime from "../utils/formatTime";

interface IProps{
  location : ILocation
}

export default function Results({location} : IProps): JSX.Element {
  const [results, setResults] = useState<IResults>({
    results: { sunrise: "searching", sunset: "searching" },
  });

  const {latitude, longitude} = location

  useEffect(() => {
    const fetchSunTimes = async () => {
      const response = await fetch(
        `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=today`
      );
      //TODO: connect location to inputs
      //TODO: Add covert to GMT etc. from UTC
      const jsonBody: IResults = await response.json();
      setResults(jsonBody);
    };
    fetchSunTimes();
  }, [location]);

  const { sunrise, sunset } = results.results;
  const sunriseFormatted = formatTime(sunrise);
  const sunsetFormatted = formatTime(sunset);
  const current = moment().format("HH:mm");
  console.log(current);

  return (
    <div className="results">
      <div className="sun_time">
        <img className="sun_image" src="./sunrise.svg" alt="sunrise icon" />
        <h1 className="time">{sunriseFormatted}</h1>
        <p className="time_description">sunrise</p>
      </div>

      <div className="sun_time">
        <img className="sun_image" src="./sunset.svg" alt="sunset icon" />
        <h1 className="time">{sunsetFormatted}</h1>
        <p className="time_description">sunset</p>
      </div>
    </div>
  );
}
