import React, { useEffect, useState } from "react";
import BookService from "../../Services/BooksServices/books.service";
//import AuthorCard from "./ProductCard";
import SearchBar from "../SearchBar/SearchBar";
import NewBook from "./NewBook";

let service = new BookService();

export default function AllProducts() {
  let [books, setBooks] = useState([]);
  let [booksCopy, setBooksCopy] = useState([]);
  let [shorts, setShort] = useState();
  let [search, setSearch] = useState("");

  let loadBooks = () => {
    service
      .getAllBooks()
      .then((result) => {
        setBooks((books = result.data.books));
        setBooksCopy((booksCopy = result.data.books));
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
      copy = books.filter((books) => books.name.toLowerCase().includes(search));
    }
    if (shorts == 1) {
      copy = copy.sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
        return 0;
      });
    } else if (shorts == 0) {
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
  }, [search, shorts]);

  return (
    <>
      <div>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">
          <SearchBar getInfo={getInfo} />
          {books.length === 0 && (
            <div className="text-center mb-4">
              No hay todavia ningun libro en nuestras listas, añade uno
            </div>
          )}
          <NewBook />
          {/* <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {authorsCopy.map((author) => (
              <div key={author._id}>
                <AuthorCard author={author} />
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
}
