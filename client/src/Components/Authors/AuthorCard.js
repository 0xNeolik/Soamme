import React from "react";
import { Link } from "react-router-dom";

function AuthorCard(props) {
  let author = props.author;
  return (
    <Link to={`/autores/${author._id}`}>
      <div
        key={author._id}
        className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
      >
        <div className="flex-shrink-0">
          <img className="h-10 w-10 rounded-full" src={author.img_url} alt="" />
        </div>
        <div className="flex-1 min-w-0">
          <span className="absolute inset-0" aria-hidden="true" />
          <p className="text-sm font-medium text-gray-900">
            {" "}
            {author.first_name} {author.last_name}
          </p>
          <p className="text-sm text-gray-500 truncate">{author.allias}</p>
        </div>
      </div>
    </Link>
  );
}
export default AuthorCard;
