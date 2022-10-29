import { useState } from "react";
interface IProps {
  setPostcode: React.Dispatch<React.SetStateAction<string>>;
}

export default function Inputs({ setPostcode }: IProps): JSX.Element {
  const [inputPostcode, setInputPostcode] = useState("");

  function handleSubmit() {
    fetch(`https://api.postcodes.io/postcodes/${inputPostcode}/validate`)
      .then((res) => res.json())
      .then((body) => {
        if (body.result) {
          setPostcode(inputPostcode);
        } else {
          window.alert("Enter a valid postcode");
        }
      });
  }

  return (
    <>
      <div id="inputs">
        <input
          placeholder="Postcode"
          value={inputPostcode}
          onChange={(e) => setInputPostcode(e.target.value)}
        ></input>
        <button id="submit_button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
}
