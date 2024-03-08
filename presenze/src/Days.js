import React from "react";

const Days = ({ names, onCheckboxChange }) => {
  const daysArray = ["Lun", "Mar", "Mer", "Gio", "Ven"];

  return (
    <div className="days-container">
      {daysArray.map((day, index) => (
        <div key={index}>
          <strong>{day}</strong>
          {names[index].map((name, i) => (
            <div key={i}>
              <input
                type="checkbox"
                checked={name.checked}
                onChange={() => onCheckboxChange(index, i)}
              />
              {name.name}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Days;
