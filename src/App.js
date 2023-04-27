import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ListBooks from "./ListBooks";
import Search from "./Search";
import * as BooksAPI from "./BooksAPI";
import { useEffect, useState } from "react";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = () => {
    BooksAPI.getAll().then((books) => setBooks(books));
  };

  const update = (book, shelf) => {
    setBooks(
      books.map((bk) => (bk.id === book.id ? { ...bk, shelf: shelf } : bk))
    );
    BooksAPI.update(book, shelf).then((res) => load());
  };

  const addBookToShelf = (book, shelf) => {
    // shelf = book.shelf;
    setBooks([...books, book]);
    BooksAPI.update(book, shelf).then((res) => {
      load();
    });
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ListBooks books={books} changeShelf={update} />,
    },
    {
      path: "search",
      element: <Search changeShelf={addBookToShelf} />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
