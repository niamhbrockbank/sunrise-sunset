import { useState } from "react";
import { ILocation } from "../types";
import Footer from "./Footer";
import Inputs from "./Inputs";
import Results from "./Results";

export default function Home(): JSX.Element {
  const [location, setLocation] = useState<ILocation>({
    latitude: "36.7201600",
    longitude: "-4.4203400",
  });

  return (
    <>
      <Inputs setLocation={setLocation} />
      <Results location={location} />
      <Footer />
    </>
  );
}
