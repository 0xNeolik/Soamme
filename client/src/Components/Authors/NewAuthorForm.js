import React, { useState } from "react";
import AuthorsService from "../../Services/AuthorsServices/authors.service";
import UploadService from "../../Services/UploadServices/upload.service";

let authorService = new AuthorsService();
let uploadService = new UploadService();

export default function NewAuthorForm(props) {
  const [author, setAuthor] = useState({
    first_name: "",
    last_name: "",
  });

  let handleSubmit = (e) => {
    e.preventDefault();
    authorService
      .newAuthor({
        first_name: author.first_name,
        last_name: author.last_name,
      })
      .then((response) => {
        props.close();
        props.history.push("/autores");
      })
      .catch((err) => console.log(err));
  };

  const handleUploadChange = (e) => {
    const uploadData = new FormData();
    uploadData.append("imageData", e.target.files[0]);
    console.log(uploadData);
    uploadService
      .uploadImage(uploadData)
      .then((response) => {
        console.log(response);
        setAuthor({ ...author, img_url: response.data.cloudinary_url });
      })
      .catch((err) => console.log("El error", { err }));
  };

  let handleInputChange = (e) => {
    const { name, value } = e.currentTarget;

    setAuthor((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
      <p className="text-center font-semibold text-lg text-indigo-600">
        Añadir un nuevo autor a nuestras listas
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
                id="first_name"
                onChange={handleInputChange}
                name="first_name"
                type="text"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block text-sm font-medium text-gray-700"
            >
              Apellido
            </label>
            <div className="mt-1">
              <input
                id="last_name"
                onChange={handleInputChange}
                name="last_name"
                type="text"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="flex justify-center mt-8">
              <div className="max-w rounded-lg shadow-xl bg-white">
                <div className="m-4">
                  {!author.img_url && (
                    <>
                      <label className="inline-block mb-2 text-gray-500">
                        Nueva foto
                      </label>
                      <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col w-full h-32 border-4 border-green-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                          <div className="flex flex-col items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-8 h-8 text-gray-400 group-hover:text-gray-600 pt-7"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                              />
                            </svg>

                            <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                              Sube una foto
                            </p>
                          </div>

                          <input
                            type="file"
                            name="imageData"
                            className="opacity-0"
                            onChange={handleUploadChange}
                          />
                        </label>
                      </div>
                    </>
                  )}
                  {author.img_url && (
                    <img
                      className="object-center object-cover w-32 h-32 text-gray-400 group-hover:text-gray-600 rounded-full"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      src={author.img_url}
                      alt=""
                    />
                  )}
                </div>
                <div className="flex justify-center p-2"></div>
              </div>
            </div>
            <button
              type="submit"
              className=" mt-10 w-1/2 mx-auto flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Añadir autor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
