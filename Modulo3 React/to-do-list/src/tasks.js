import { useState } from "react";
import moment from "moment";

export let tasks = [
  { done: true, text: "Andare in banca", date: new Date("2024-07-23") },
  { done: true, text: "Portare giù il cane", date: new Date("2024-02-03") },
  { done: false, text: "Lavare i panni", date: new Date("2023-11-30") },
  { done: true, text: "Studia react", date: new Date("2024-02-12") },
  { done: false, text: "studiare", date: new Date("2023-02-22") },
  { done: true, text: "Prenotare vacanza", date: new Date("2024-02-28") },
];

export default function Task({ task }) {
  let [visibility, setVisibility] = useState("");
  const [isChecked, setIsChecked] = useState(task.done);
  function invert() {
    setIsChecked(!isChecked);
  }
  function remove() {}
  const daysDifference = moment().diff(task.date, "days");
  const isOlderThan7Days = daysDifference > 7;
  const isOlderThan15Days = daysDifference > 15;
  const difference = isOlderThan15Days
    ? "older15"
    : isOlderThan7Days
    ? "older7"
    : "notold";
  setVisibility(difference);
  return (
    <div className={visibility}>
      <input checked={isChecked} onChange={invert} type="checkbox"></input>
      <p className={isChecked ? "completed" : ""}>
        {task.text} {task.date.toString()} ({daysDifference} days)
      </p>
      <button onClick={remove}>Delete</button>
    </div>
  );
}
