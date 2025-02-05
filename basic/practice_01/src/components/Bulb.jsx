import { useState } from "react";

const Bulb = () => {
  const [light, setLight] = useState("OFF");
  return (
    <div>
      <h1>{light}</h1>
      <button
        onClick={() => {
          setLight(light === "ON" ? "OFF" : "ON");
        }}
      >
        Switch
      </button>
    </div>
  );
};

export default Bulb;
