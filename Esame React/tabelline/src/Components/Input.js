import React, { useState } from "react";
import Tab from "./Tab";
export default function Input() {
  const [number, setNumber] = useState("");
  // inizializzato cosi altrimenti se inizializzo a 0 mi inserisce sempre 0 e non voglio
  return (
    <>
      <h3 className="insert">Insert a number</h3>
      <input
        className="input"
        type="text"
        placeholder="Insert a number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      ></input>
      <Tab number={number}></Tab>
    </>
  );
}
