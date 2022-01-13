import React, { useState } from "react";
import AuthorsService from "../../Services/AuthorsServices/authors.service";

let authorService = new AuthorsService();

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
        console.log(response);
        props.close();
        props.history.push("/autores");
      })
      .catch((err) => console.log(err));
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
