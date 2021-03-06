import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookService from "../../Services/BooksServices/books.service";
import EditBook from "./EditBook/EditBook";
import AddToFavorite from "./AddToFavorite/AddToFavorite";

let service = new BookService();

export default function BookDetails(props) {
  let [book, setBook] = useState();
  let [favoriteButton, setFavoriteButton] = useState(false);

  let logged = props.loggedUser;
  let [favorites, setFavorites] = useState(logged?.favorites);

  const { id } = props.match.params;

  useEffect(() => {
    loadBook();
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    addedToFavorite();
  }, [favorites, book]);

  let addedToFavorite = () => {
    favorites?.map((favorite) => {
      if (favorite === id) {
        setFavoriteButton(true);
      }
    });
  };

  let loadBook = () => {
    service.getOneBook(id).then((result) => {
      setBook((book = result.data));
    });
  };

  return (
    <div className="bg-gray-200 h-screen">
      <div className="py-6">
        {/* Image gallery */}
        <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="aspect-w-3 aspect-h-4 overflow-hidden lg:block rounded-lg">
            <img
              src={book?.img_url}
              className="px-4 w-full lg:h-full h-72 object-center lg:mx-0 lg:px-0 lg:object-contain object-cover mb-6 lg:mb-0 rounded-lg "
              alt="Product"
            />
          </div>
          <div className="lg:col-span-2 lg:pr-8 mx-8 lg:mx-4">
            <h1 className="text-2xl font-extrabold tracking-tight text-black sm:text-3xl mb-4">
              {book?.name}
            </h1>
            <p className="text-sm tracking-tight text-indigo-600 mb-4">
              <span className="text-sm tracking-tight text-black mb-4">
                ISBN:
              </span>{" "}
              {book?.isbn}
            </p>
            <p className="text-sm tracking-tight text-indigo-600 mb-4">
              <span className="text-sm tracking-tight text-black mb-4">
                Autor:
              </span>{" "}
              <Link
                to={`/autores/${book?.author._id}`}
                className="hover:text-black "
              >
                {book?.author.first_name} {book?.author.last_name}
              </Link>
            </p>
            <p className="text-sm tracking-tight text-indigo-600 mb-4">
              {book?.description}
            </p>
            {logged && (
              <>
                <div className="inline-flex">
                  <EditBook book={book} loadBook={loadBook} />
                </div>
                {favoriteButton === false && (
                  <div className="inline-flex">
                    <AddToFavorite
                      book={book}
                      loadBook={loadBook}
                      addedToFavorite={addedToFavorite}
                      setFavoriteButton={setFavoriteButton}
                    />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
