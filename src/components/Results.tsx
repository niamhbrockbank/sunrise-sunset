import { useEffect, useState } from "react";

interface IResults {
  results: {
    sunrise: string;
    sunset: string;
  };
}

export default function Results(): JSX.Element {
  const [results, setResults] = useState<IResults>({
    results: { sunrise: "searching", sunset: "searching" },
  });

  useEffect(() => {
    const fetchSunTimes = async () => {
      const response = await fetch(
        "https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=today"
      );
      //TODO: connect location to inputs
      //TODO: Add inputs
      //TODO: Add covert to GMT etc. from UTC
      const jsonBody: IResults = await response.json();
      setResults(jsonBody);
    };
    fetchSunTimes();
  }, []);

  //TODO: Convert to 24hr clock
  const { sunrise, sunset } = results.results;
  return (
    <div className="results">
      <div className="sun_time">
        <img className='sun_image' src='./sunrise.svg' />
        <h1 className="time">{sunrise}</h1>
        <p className="time_description">sunrise</p>
      </div>

      <div className="sun_time">
        <img className='sun_image' src='./sunset.svg' />
        <h1 className="time">{sunset}</h1>
        <p className="time_description">sunset</p>
      </div>
    </div>
  );
}
