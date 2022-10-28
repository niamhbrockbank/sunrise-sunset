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
      const jsonBody: IResults = await response.json();
      setResults(jsonBody);
    };
    fetchSunTimes();
  }, []);

  const { sunrise, sunset } = results.results;
  return (
    <>
      <p>sunrise: {sunrise}</p>
      <p>sunset: {sunset}</p>
    </>
  );
}
