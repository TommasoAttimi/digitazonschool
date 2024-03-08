import React from "react";
import "./App.css";
import Book from "./Book";
import { listBooks } from "./listBooks";

function App() {
  return (
    <div className="container">
      <div className="list">
        <h3>List</h3>
        <Book></Book>
      </div>
      <div className="read">
        <h3>Read</h3>
      </div>
      <div className="favorites">
        <h3>Favorites</h3>
      </div>
    </div>
  );
}

export default App;
