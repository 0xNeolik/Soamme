import React, { useEffect, useState } from "react";

import BookServices from "../../../Services/AuthorsServices/authors.service";
import UploadService from "../../../Services/UploadServices/UploadServices";

let authorServices = new BookServices();
let uploadService = new UploadService();

export default function EditAuthor(props) {
  const [author, setAuthor] = useState({
    id: props.author._id,
    first_name: props.author.first_name,
    last_name: props.author.last_name,
    allias: props.author.allias,
    img_url: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    authorServices
      .editAuthor(author)
      .then((response) => {
        props.loadAuthor();
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
        setAuthor({ ...author, img_url: response.data.cloudinary_url });
      })
      .catch((err) => console.log("El error", { err }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;

    setAuthor((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  useEffect(() => {}, [author]);

  return (
    <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
      <p className="text-center font-semibold text-lg text-indigo-800">
        Editar libro
      </p>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="nombre"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre
            </label>
            <div className="mt-1">
              <input
                id="nombre"
                name="nombre"
                type="text"
                onChange={handleInputChange}
                value={author.first_name}
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="apellido"
              className="block text-sm font-medium text-gray-700"
            >
              Apellido
            </label>
            <div className="mt-1">
              <input
                id="apellido"
                onChange={handleInputChange}
                name="apellido"
                value={author.last_name}
                type="text"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="allias"
              className="block text-sm font-medium text-gray-700"
            >
              Allias
            </label>
            <div className="mt-1">
              <input
                id="allias"
                onChange={handleInputChange}
                name="isalliasbn"
                value={author.allias}
                type="text"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Foto del autor
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
              Editar autor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
