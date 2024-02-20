import Task from "./Task.js";
import { tasks } from "./Tasks.js";

export default function ToDoList() {
  let tasksTags = [];
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].done) {
      tasksTags.push(
        <Task
          done={tasks[i].done}
          text={tasks[i].text}
          date={tasks[i].date}
        ></Task>
      );
    } else {
      tasksTags.unshift(
        <Task
          done={tasks[i].done}
          text={tasks[i].text}
          date={tasks[i].date}
        ></Task>
      );
    }
  }
  return <>{tasksTags}</>;
}
