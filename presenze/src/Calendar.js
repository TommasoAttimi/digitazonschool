import React from "react";
import Days from "./Days";

const Calendar = ({ names, onCheckboxChange }) => {
  return (
    <div>
      <h2>Calendario</h2>
      <Days names={names} onCheckboxChange={onCheckboxChange} />
    </div>
  );
};

export default Calendar;
