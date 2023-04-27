import React from "react";
import Book from "./Book";

function Shelf({ books, shelf, changeShelf }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((b) => (
            <li key={b.id}>{<Book book={b} changeShelf={changeShelf} />}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Shelf;
