import React from "react";
import { listBooks } from "./listBooks";
export default function Book({
  id,
  book,
  read,
  favorite,
  onChange,
  isChecked,
}) {
  return (
    <div>
      {listBooks.map((book) => (
        <div className="singleBook">
          <span>{book.text}</span>
          <input type="checkbox" onClick={() => read(id, book)}></input>
          <input type="checkbox" onClick={() => favorite(id, book)}></input>
        </div>
      ))}
    </div>
  );
}
