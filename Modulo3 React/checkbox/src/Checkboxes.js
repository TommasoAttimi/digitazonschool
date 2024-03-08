import Checkbox from "./Checkbox";

export default function Checkboxes({ checkboxes, className, move }) {
  return (
    <div className={"checkboxes " + className}>
      {checkboxes.map((checkbox) => (
        <Checkbox move={move} checkbox={checkbox} />
      ))}
    </div>
  );
}
