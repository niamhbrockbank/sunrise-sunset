import { useState } from "react";
import { ILocation } from "../types";
interface IProps {
  setLocation : React.Dispatch<React.SetStateAction<ILocation>>
}

export default function Inputs({setLocation} : IProps): JSX.Element {
  const [lat, setLat] = useState("")
  const [long, setLong] = useState("")

  return (
    <>
      <div id="inputs">
        <input placeholder="Latitude" value={lat} onChange={(e) => setLat(e.target.value)}></input>
        <input placeholder="Longitude" value={long} onChange={(e) => setLong(e.target.value)}></input>
        <button onClick={() => setLocation({latitude: lat, longitude : long})}>Submit</button>
      </div>
    </>
  );
}
