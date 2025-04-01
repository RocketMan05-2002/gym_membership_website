import React, { useMemo, useState } from "react";
import "./bmi.css";

const Bmi = ({setBmi}) => {
  const [weight, setWeight] = useState(80);
  const [height, setHeight] = useState(184);

  const handleweight = (e) => {
    setWeight(e.target.value);
  };
  const handleheight = (e) => {
    setHeight(e.target.value);
  };

  const output = useMemo(() => {
    const hm = height / 100;
    const ans = (weight / (hm * hm)).toFixed(1);
    setBmi(ans);
    return ans;
  }, [weight, height]);

  return (
    <div>
      <main className="gym__bmi">
        <h1 className="gym__heading">BMI Calculator</h1>
        <div className="gym__input_section">
          <div className="gym__slider-output">Weight : {weight} kg</div>
          <input
            className="gym__input-slider"
            type="range"
            step="1"
            min="20"
            max="200"
            onChange={handleweight}
          />
          <br />
          <div className="gym__slider-output">Height : {height} cm</div>
          <input
            className="gym__input-slider"
            type="range"
            step="1"
            min="50"
            max="250"
            onChange={handleheight}
          />
          <br />
        </div>
        {/* ---- */}
        <div className="gym__output-section">
          <p>Your BMI is </p>
          <p className="gym__output">{output}</p>
        </div>
        {output < 20 && <p>Gain some muscles broski!</p>}
        {output > 25 && <p>You are overweight! :))</p>}
        {output > 20 && output <= 25 && <p>You are in shape</p>}
      </main>
    </div>
  );
};

export default Bmi;
