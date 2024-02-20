import { useState } from "react";
import "../App.css";
export default function Task({ done, text, date }) {
  let [isChecked, setIsChecked] = useState(done);
  function invert() {
    setIsChecked(!isChecked);
  }

  return (
    <div className="container">
      <input checked={isChecked} onChange={invert} type="checkbox"></input>
      <p className={isChecked ? "completo" : ""}>
        {text} {date.toString()}
      </p>
    </div>
  );
}
