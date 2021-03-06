import React, { useState, useEffect } from "react";
import AuthorsService from "../../Services/AuthorsServices/authors.service";
import BooksService from "../../Services/BooksServices/books.service";

let authorService = new AuthorsService();
let bookService = new BooksService();

export default function NewBookForm(props) {
  let [authors, setAuthors] = useState([]);
  let [authorsCopy, setAuthorsCopy] = useState([]);

  const [book, setBook] = useState({
    author: undefined,
    isbn: "",
    name: "",
    description: "",
  });

  let loadAuthors = () => {
    authorService
      .getAllAuthors()
      .then((result) => {
        setAuthors((authors = result.data));
        setAuthorsCopy((authorsCopy = result.data));
      })
      .catch((err) => console.log(err));
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    bookService
      .newBook({
        author: book.author,
        isbn: book.isbn,
        name: book.name,
        description: book.description,
        img_url: book.img_url,
      })
      .then((response) => {
        props.close();
        props.addBook();
        props.history.push("/libros");
      })
      .catch((err) => console.log(err));
  };

  let handleInputChange = (e) => {
    const { name, value } = e.currentTarget;

    setBook((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    loadAuthors();
  }, []);

  return (
    <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
      <p className="text-center font-semibold text-lg text-indigo-600">
        Añadir un nuevo libro a nuestras listas
      </p>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="first_name"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre
            </label>
            <div className="mt-1">
              <input
                id="name"
                onChange={handleInputChange}
                name="name"
                type="text"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="isbn"
              className="block text-sm font-medium text-gray-700"
            >
              ISBN
            </label>
            <div className="mt-1">
              <input
                id="isbn"
                onChange={handleInputChange}
                name="isbn"
                type="text"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Descipción
            </label>
            <div className="mt-1">
              <textarea
                id="description"
                onChange={handleInputChange}
                name="description"
                type="text"
                required
                className="appearance-none h-28 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="type"
              className="block text-sm font-medium text-gray-700"
            >
              Autor del libro
            </label>
            <select
              id="type"
              name="author"
              className=" border-2 border-indigo-500 mt-3 block w-full pl-1 pr-10 py-2 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              onChange={handleInputChange}
            >
              {authorsCopy.map((author) => (
                <option value={author._id}>
                  {author.first_name} {author.last_name}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className=" mt-10 w-1/2 mx-auto flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Añadir libro
          </button>
        </form>
      </div>
    </div>
  );
}
