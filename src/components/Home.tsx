import { useState } from "react";
import Footer from "./Footer";
import Inputs from "./Inputs";
import Results from "./Results";

export default function Home(): JSX.Element {
  const [postcode, setPostcode] = useState<string>("BS2 0HY");

  //TODO: Check postcode is a valid postcode
  //validate with postcode.io

  return (
    <>
      <Inputs setPostcode={setPostcode} />
      <Results postcode={postcode} />
      <Footer />
    </>
  );
}
