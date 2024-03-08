import Day from "./Day";

export default function Week() {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let tags = [];
  for (let i = 0; i < days.length; i++) {
    let current = days[i];
    let className = "";
    if (current === "Sat" || current === "Sun") {
      className = "weekend";
    }
    if (i == new Date().getDay()) {
      className = "today";
    }
    tags.push(<Day className={className} day={days[i]} key={i} />);
  }

  return <div className="week">{tags}</div>;
}
