import { useState } from "react";
import ToDoList from "./To-do-list/ToDoList.js";

export default function Contatore() {
  let [count, setCount] = useState(0);
  function click() {
    setCount(count + 1);
  }
  function reset() {
    setCount(0);
  }
  return (
    <>
      <h1>COUNTER</h1>
      <p>{count}</p>
      <button onClick={click}>ADD</button> <br></br>
      <button onClick={reset}>RESET</button>
      <hr></hr>
      <ToDoList></ToDoList>
    </>
  );
}
