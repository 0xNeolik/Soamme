import React, { useEffect, useState } from "react";
import AuthorService from "../../Services/AuthorsServices/authors.service";
//import AuthorCard from "./ProductCard";
import SearchBar from "../SearchBar/SearchBar";
import NewAuthor from "./NewAuthor";

let service = new AuthorService();

export default function AllProducts() {
  let [authors, setAuthors] = useState([]);
  let [authorsCopy, setAuthorsCopy] = useState([]);
  let [shorts, setShort] = useState();
  let [search, setSearch] = useState("");

  let loadAuthors = () => {
    service
      .getAllAuthors()
      .then((result) => {
        setAuthors((authors = result.data.authors));
        setAuthorsCopy((authorsCopy = result.data.authors));
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
        authors.name.toLowerCase().includes(search)
      );
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
    setAuthorsCopy(copy);
  }, [search, shorts]);

  return (
    <>
      <div>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">
          <SearchBar getInfo={getInfo} />
          {authorsCopy.length === 0 && (
            <div className="text-center mb-4">
              No hay todavia ningun autor en nuestras listas, añade uno
            </div>
          )}
          <NewAuthor />
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
