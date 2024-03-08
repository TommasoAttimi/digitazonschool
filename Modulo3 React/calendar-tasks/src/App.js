import { useState } from "react";
import Day from "./Day";
import "./styles.css";

export default function App() {
  let task = [{ text: "Portare giu' il gatto", done: false }];
  let [mon, setMon] = useState([]);
  let [tue, setTue] = useState([]);
  let [wed, setWed] = useState([]);
  let [thu, setThu] = useState([]);
  let [fri, setFri] = useState(task);
  let [sat, setSat] = useState([]);
  let [sun, setSun] = useState([]);

  const [isChecked, setIsChecked] = useState(false);
  function invert(id, task) {
    setIsChecked(!isChecked);
    if (id == 0) {
      setMon(
        mon.filter((t) => {
          task.text != t.text;
        })
      );
    }
    if (id == 1) {
      setTue(
        tue.filter((t) => {
          task.text != t.text;
        })
      );
    }
    if (id == 2) {
      setWed(
        wed.filter((t) => {
          task.text != t.text;
        })
      );
    }
    if (id == 3) {
      setThu(
        thu.filter((t) => {
          task.text != t.text;
        })
      );
    }
    if (id == 4) {
      setFri(
        fri.filter((t) => {
          task.text != t.text;
        })
      );
    }
    if (id == 5) {
      setSat(
        sat.filter((t) => {
          task.text != t.text;
        })
      );
    }
    if (id == 6) {
      setSun(
        sun.filter((t) => {
          task.text != t.text;
        })
      );
    }
  }

  function left(id, task) {
    if (id === 0) {
      setMon(mon.filter((t) => t.text != task.text));
      setSun([...sun, task]);
    }
    if (id === 1) {
      setTue(tue.filter((t) => t.text != task.text));
      setMon([...mon, task]);
    }
    if (id === 2) {
      setWed(wed.filter((t) => t.text != task.text));
      setTue([...tue, task]);
    }
    if (id === 3) {
      setThu(thu.filter((t) => t.text != task.text));
      setWed([...wed, task]);
    }
    if (id === 4) {
      setFri(fri.filter((t) => t.text != task.text));
      setThu([...thu, task]);
    }
    if (id == 5) {
      setSat(sat.filter((t) => t.text != task.text));
      setFri([...fri, task]);
    }
    if (id === 6) {
      setSun(sun.filter((t) => t.text != task.text));
      setSat([...sat, task]);
    }
  }

  function right(id, task) {
    if (id === 0) {
      setMon(mon.filter((t) => t.text != task.text));
      setTue([...tue, task]);
    }
    if (id === 1) {
      setTue(tue.filter((t) => t.text != task.text));
      setWed([...wed, task]);
    }
    if (id === 2) {
      setWed(wed.filter((t) => t.text != task.text));
      setThu([...thu, task]);
    }
    if (id === 3) {
      setThu(thu.filter((t) => t.text != task.text));
      setFri([...fri, task]);
    }
    if (id === 4) {
      setFri(fri.filter((t) => t.text != task.text));
      setSat([...sat, task]);
    }
    if (id == 5) {
      setSat(sat.filter((t) => t.text != task.text));
      setSun([...sun, task]);
    }
    if (id === 6) {
      setSun(sun.filter((t) => t.text != task.text));
      setMon([...mon, task]);
    }
  }

  return (
    <div className="container">
      <Day
        id={0}
        day="Monday"
        tasks={mon}
        left={left}
        right={right}
        onChange={invert}
        isChecked={mon.done}
      />
      <Day
        id={1}
        day="Tuesday"
        tasks={tue}
        left={left}
        right={right}
        onChange={invert}
        isChecked={tue.done}
      />
      <Day
        id={2}
        day="Wednesday"
        tasks={wed}
        left={left}
        right={right}
        onChange={invert}
        isChecked={wed.done}
      />
      <Day
        id={3}
        day="Thursday"
        tasks={thu}
        left={left}
        right={right}
        onChange={invert}
        isChecked={thu.done}
      />
      <Day
        id={4}
        day="Friday"
        tasks={fri}
        left={left}
        right={right}
        onChange={invert}
        isChecked={fri.done}
      />
      <Day
        id={5}
        day="Saturday"
        tasks={sat}
        left={left}
        right={right}
        onChange={invert}
        isChecked={sat.done}
      />
      <Day
        id={6}
        day="Sunday"
        tasks={sun}
        left={left}
        right={right}
        onChange={invert}
        isChecked={sun.done}
      />
    </div>
  );
}
