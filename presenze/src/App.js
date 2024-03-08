import React, { useState } from "react";
import Input from "./Input";
import Calendar from "./Calendar";
import "./App.css";

function App() {
  const [names, setNames] = useState([...Array(5)].map(() => []));

  const handleNameSubmit = (name) => {
    setNames((prevNames) => {
      const updatedNames = [...prevNames];
      // Aggiungi il nuovo nome a ciascun giorno
      updatedNames.forEach((day, index) => {
        day.push({ name, checked: false });
      });
      return updatedNames;
    });
  };

  const handleCheckboxChange = (dayIndex, nameIndex) => {
    setNames((prevNames) => {
      const updatedNames = [...prevNames];
      updatedNames[dayIndex] = [...updatedNames[dayIndex]];
      updatedNames[dayIndex][nameIndex] = {
        ...updatedNames[dayIndex][nameIndex],
        checked: !updatedNames[dayIndex][nameIndex].checked,
      };
      return updatedNames;
    });
  };

  const handleRemoveChecked = () => {
    const updatedNames = names.map((dayNames) =>
      dayNames.filter((name) => !name.checked)
    );
    setNames(updatedNames);
  };

  return (
    <div className="container">
      <Input onNameSubmit={handleNameSubmit} />
      {names.length > 0 && (
        <Calendar names={names} onCheckboxChange={handleCheckboxChange} />
      )}
      <button className="button-remove" onClick={handleRemoveChecked}>
        Rimuovi selezionati
      </button>
    </div>
  );
}

export default App;
