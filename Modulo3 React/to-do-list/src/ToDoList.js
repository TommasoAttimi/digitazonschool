import "./App.css";
import { tasks } from "./tasks.js";
import Task from "./tasks.js";

export default function List() {
  let tasksTags = [];
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].done) {
      tasksTags.push(<Task task={tasks[i]} />);
    } else {
      tasksTags.unshift(<Task task={tasks[i]} />);
    }
  }
  return <>{tasksTags}</>;
}
