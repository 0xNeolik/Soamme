import React from "react";
import { Link } from "react-router-dom";

function BookCard(props) {
  let book = props.book;
  return (
    <Link to={`/libros/${book._id}`}>
      <div key={book._id} className="group bg-white rounded-lg">
        <div className="w-full  aspect-w-1 aspect-h-1 bg-white overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <img
            src={book.img_url}
            className="group w-full h-80 object-center object-cover bg-white rounded-t-lg"
            alt="Author Img"
          />
        </div>
        <div className="pl-8 pb-4 bg-gray-50 rounded-lg">
          <h3 className="pt-4 pr-2 mb-6 text-sm text-black h-10">
            {book.name}
          </h3>
        </div>
      </div>
    </Link>
  );
}
export default BookCard;
