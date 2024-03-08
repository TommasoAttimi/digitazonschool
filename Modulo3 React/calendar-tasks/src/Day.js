import Task from "./Task";

export default function Day({
  id,
  day,
  tasks,
  left,
  right,
  onChange,
  isChecked,
}) {
  return (
    <article className="day">
      <h3>{day}</h3>
      {tasks.map((task, i) => (
        <Task
          key={i}
          task={task}
          left={left}
          right={right}
          id={id}
          onChange={onChange}
          isChecked={isChecked}
        />
      ))}
    </article>
  );
}
