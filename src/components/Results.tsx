import moment from "moment";
import { useEffect, useState } from "react";
import { IPostcodeResults, IResults } from "../types";
import formatTime from "../utils/formatTime";

interface IProps {
  postcode: string;
}

export default function Results({ postcode }: IProps): JSX.Element {
  const [results, setResults] = useState<IResults>({
    results: { sunrise: "0:00", sunset: "11:59" },
  });

  useEffect(() => {
    const fetchLatLong = async () => {
      const response = await fetch(
        `https://api.postcodes.io/postcodes/${postcode}`
      );
      const jsonBody: IPostcodeResults = await response.json();
      const { latitude, longitude } = jsonBody.result;

      const fetchSunTimes = async () => {
        const response = await fetch(
          `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=today`
        );

        const jsonBody: IResults = await response.json();
        setResults(jsonBody);
      };
      fetchSunTimes();
    };

    fetchLatLong();
  }, [postcode]);

  const { sunrise, sunset } = results.results;

  const sunriseFormatted = formatTime(sunrise);
  const sunsetFormatted = formatTime(sunset);

  const sunTimeRemaing = moment(sunsetFormatted, "HH:mm").fromNow();

  return (
    <>
      <div id="sun_remaining">
        {sunTimeRemaing.includes("ago") ? (
          <p>
            Sunset was <mark>{sunTimeRemaing}</mark>.
          </p>
        ) : (
          <p>
            You have <mark>{sunTimeRemaing.slice(2)}</mark> of sunlight left.
          </p>
        )}
      </div>
      <div className="results">
        <div className="sun_time">
          <img className="sun_image" src="./sunrise.png" alt="sunrise" />
          <h1 className="time">{sunriseFormatted}</h1>
          <p className="time_description">sunrise</p>
        </div>

        <div className="sun_time">
          <img className="sun_image" src="./sunset.png" alt="sunset" />
          <h1 className="time">{sunsetFormatted}</h1>
          <p className="time_description">sunset</p>
        </div>
      </div>
    </>
  );
}
