import React, { useEffect, useState } from "react";

import BookServices from "../../../Services/BooksServices/books.service";
import UploadService from "../../../Services/UploadServices/UploadServices";

let bookServices = new BookServices();
let uploadService = new UploadService();

export default function EditBook(props) {
  const [book, setBook] = useState({
    id: props.book._id,
    author: props.book.author,
    isbn: props.book.isbn,
    name: props.book.name,
    description: props.book.description,
    img_url: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    bookServices
      .editBook(book)
      .then((response) => {
        props.loadBook();
        props.close();
      })
      .catch((err) => console.log(err));
  };

  const handleUploadChange = (e) => {
    const uploadData = new FormData();
    uploadData.append("imageData", e.target.files[0]);
    uploadService
      .uploadImage(uploadData)
      .then((response) => {
        setBook({ ...book, img_url: response.data.cloudinary_url });
      })
      .catch((err) => console.log("El error", { err }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;

    setBook((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  useEffect(() => {}, [book]);

  return (
    <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
      <p className="text-center font-semibold text-lg text-indigo-800">
        Editar libro
      </p>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Titulo
            </label>
            <div className="mt-1">
              <input
                id="name"
                name="name"
                type="text"
                onChange={handleInputChange}
                value={book.name}
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
                value={book.isbn}
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
                value={book.description}
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
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Caratula
            </label>

            <div className="mt-1">
              <input
                type="file"
                id="image"
                name="imageData"
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={handleUploadChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Editar libro
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
