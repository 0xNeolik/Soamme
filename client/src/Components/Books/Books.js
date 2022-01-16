import React, { useEffect, useState } from "react";
import BookService from "../../Services/BooksServices/books.service";
import BookCard from "./BookCard";
import SearchBar from "../SearchBar/SearchBar";
import NewBook from "./NewBook";
import Filter from "../Filters/Filter";

let service = new BookService();

export default function Books(props) {
  let [books, setBooks] = useState([]);
  let [booksCopy, setBooksCopy] = useState([]);
  let [short, setShort] = useState();
  let [search, setSearch] = useState("");
  let logged = props.loggedUser;

  let loadBooks = () => {
    service
      .getAllBooks()
      .then((result) => {
        setBooks((books = result.data));
        setBooksCopy((booksCopy = result.data));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const getInfo = (searching) => {
    setSearch(searching);
  };
  const getShort = (id) => {
    setShort(id);
  };

  useEffect(() => {
    let copy = [...books];
    if (search.length !== 0) {
      copy = books.filter((book) => book.name.toLowerCase().includes(search));
    }
    if (short === true) {
      copy = copy.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
    }
    setBooksCopy(copy);
  }, [search, short]);

  return (
    <>
      <div>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">
          <SearchBar getInfo={getInfo} />
          <div className="flex sm:justify-between">
            <Filter getShort={getShort} />
            <NewBook loadBooks={loadBooks} />
          </div>
          {books.length === 0 && (
            <div className="text-center mb-4">
              No hay todavia ningun libro en nuestras listas, añade uno
            </div>
          )}

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {booksCopy.map((book) => (
              <div key={book._id}>
                <BookCard book={book} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
