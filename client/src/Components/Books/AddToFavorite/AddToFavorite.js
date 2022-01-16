import React from "react";
import { PlusSmIcon } from "@heroicons/react/solid";

import UserService from "../../../Services/UserServices/user.service";

let userService = new UserService();

function BookFavorite(props) {
  let book = props.book;

  console.log("---", props);

  let addBook = () => {
    userService.addToFavorite(book?._id).then((result) => {
      props.setFavoriteButton(true);
      props.loadBook();
    });
  };

  return (
    <div className="flex justify-center mt-2 mx-8">
      <button
        type="button"
        onClick={addBook}
        className="relative inline-flex items-center px-4 py-2 shadow-sm text-sm font-medium rounded-md text-indigo-500 border-2 border-indigo-500 hover:bg-indigo-600 hover:text-white"
      >
        <PlusSmIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
        <span>Añadir a favoritos</span>
      </button>
    </div>
  );
}

export default BookFavorite;
