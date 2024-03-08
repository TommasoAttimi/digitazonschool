import "./styles.css";
import Checkboxes from "./Checkboxes";
import { useState } from "react";

export default function App() {
  let checkboxes = [
    {
      left: false,
      right: false,
      text: "Checkbox",
    },
    {
      left: false,
      right: false,
      text: "Checkbox 2",
    },
  ];
  let [top, setTop] = useState(checkboxes);
  let [left, setLeft] = useState([]);
  let [right, setRight] = useState([]);

  function cleanup() {
    setTop(top.filter((checkbox) => !checkbox.left && !checkbox.right));
    setLeft(left.filter((checkbox) => checkbox.left));
    setRight(right.filter((checkbox) => checkbox.right));
  }

  function move(checkbox) {
    cleanup();
    if (checkbox.left) {
      setLeft([...left, checkbox]);
    } else if (checkbox.right) {
      setRight([...right, checkbox]);
    } else {
      setTop([...top, checkbox]);
    }
  }

  return (
    <div className="container">
      <Checkboxes move={move} className="blue" checkboxes={top}></Checkboxes>
      <div className="container-inner">
        <Checkboxes
          move={move}
          className="green"
          checkboxes={left}
        ></Checkboxes>
        <Checkboxes
          move={move}
          className="pink"
          checkboxes={right}
        ></Checkboxes>
      </div>
    </div>
  );
}
