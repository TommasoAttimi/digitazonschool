export default function Task({ task, id, left, right, onChange, isChecked }) {
  return (
    <div>
      <button onClick={() => left(id, task)}>&lt;</button>
      <input
        type="checkbox"
        onChange={() => onChange(id, task)}
        checked={isChecked}
      />
      {task.text}
      <button onClick={() => right(id, task)}>&gt;</button>
    </div>
  );
}
