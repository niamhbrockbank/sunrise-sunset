import { useState } from "react";
import { ILocation } from "../types";
import Footer from "./Footer";
import Inputs from "./Inputs";
import Results from "./Results";

export default function Home(): JSX.Element {
  const [location, setLocation] = useState<ILocation>({
    latitude: "52.729100005889684",
    longitude: "-1.0915778066014774",
  });

  return (
    <>
      <Inputs setLocation={setLocation} />
      <Results location={location} />
      <Footer />
    </>
  );
}
