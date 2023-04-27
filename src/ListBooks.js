import React from "react";
import Shelf from "./Shelf";
import { Link } from "react-router-dom";

function ListBooks({ books, changeShelf }) {
  const shelves = [];

  for (const shelf of new Set(books.map((b) => b.shelf)).values()) {
    shelves.push(shelf);
  }
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelves.map((shelf, index) => (
            <Shelf
              key={index}
              shelf={shelf}
              changeShelf={changeShelf}
              books={books.filter((b) => b.shelf === shelf)}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link className="button_add" to={"search"}>
          Add a book
        </Link>
      </div>
    </div>
  );
}

export default ListBooks;
