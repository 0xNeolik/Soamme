import React, { useEffect, useState } from "react";
import AuthorService from "../../Services/AuthorsServices/authors.service";
//import AuthorCard from "./ProductCard";
import SearchBar from "../SearchBar/SearchBar";
import NewAuthor from "./NewAuthor";
import AuthorCard from "./AuthorCard";
import Filter from "../Filters/Filter";

let service = new AuthorService();

export default function Authors() {
  let [authors, setAuthors] = useState([]);
  let [authorsCopy, setAuthorsCopy] = useState([]);
  let [shorts, setShort] = useState();
  let [search, setSearch] = useState("");

  let loadAuthors = () => {
    service
      .getAllAuthors()
      .then((result) => {
        setAuthors((authors = result.data));
        setAuthorsCopy((authorsCopy = result.data));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadAuthors();
  }, []);

  const getInfo = (searching) => {
    setSearch(searching);
  };

  const getShort = (id) => {
    setShort(id);
  };

  useEffect(() => {
    let copy = [...authors];

    if (search.length !== 0) {
      copy = authors.filter((author) =>
        author.first_name.toLowerCase().includes(search)
      );
    }
    if (shorts === true) {
      copy = copy.sort((a, b) => {
        if (a.first_name > b.first_name) {
          return 1;
        }
        if (a.first_name < b.first_name) {
          return -1;
        }
        return 0;
      });
    }
    setAuthorsCopy(copy);
  }, [search, shorts]);

  return (
    <>
      <div>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">
          <SearchBar getInfo={getInfo} />

          <div className="flex sm:justify-between">
            <Filter getShort={getShort} />
            <NewAuthor loadAuthors={loadAuthors} />
          </div>
          {authors.length === 0 && (
            <div className="text-center mb-4">
              No hay todavia ningun autor en nuestras listas, añade uno
            </div>
          )}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {authorsCopy.map((author) => (
              <div key={author._id}>
                <AuthorCard author={author} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
