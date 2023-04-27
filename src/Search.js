import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";

function Search({ changeShelf }) {
  //   const [query, setQuery] = useState("");

  const [books, setbooks] = useState([]);

  const addProperty = (arr) => arr.map((obj) => ({ ...obj, shelf: "none" }));

  const searchBook = (query) => {
    BooksAPI.search(query).then((res) => {
      setbooks(addProperty(res));
    });
  };

  const submitQuery = (e) => {
    if (e.key === "Enter") searchBook(e.target.value);
  };
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to={"/"}>
          Close
        </Link>
        <div className="search-books-input-wrapper">
          {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
          <input
            type="text"
            placeholder="Search by title or author"
            onKeyDown={submitQuery}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {books &&
            books.map((b) => (
              <li key={b.id}>{<Book book={b} changeShelf={changeShelf} />}</li>
            ))}
        </ol>
      </div>
    </div>
  );
}

export default Search;
