import React, { useState } from "react";

const Input = ({ onNameSubmit }) => {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    onNameSubmit(name);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Inserisci il nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSubmit}>Aggiungi</button>
    </div>
  );
};

export default Input;
