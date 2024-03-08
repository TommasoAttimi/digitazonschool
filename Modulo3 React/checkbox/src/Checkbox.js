export default function Checkbox({ checkbox, move }) {
  return (
    <div>
      <input
        onChange={(event) => {
          checkbox.left = event.target.checked;
          move(checkbox);
        }}
        type="checkbox"
        checked={checkbox.left}
      />
      <input
        onChange={(event) => {
          checkbox.right = event.target.checked;
          move(checkbox);
        }}
        type="checkbox"
        checked={checkbox.right}
      />
      <span>{checkbox.text}</span>
    </div>
  );
}
