import React from "react";
import { Link } from "react-router-dom";

function AuthorCard(props) {
  let author = props.author;
  return (
    <div>
      <div key={author._id} className="group bg-white rounded-lg">
        <div className="w-full  aspect-w-1 aspect-h-1 bg-white overflow-hidden xl:aspect-w-7 xl:aspect-h-8 rounded-lg">
          <img
            src={author.img_url}
            className="group w-full h-80 object-center object-cover bg-white rounded-lg"
            alt="Author Img"
          />
        </div>
        <div className="pl-8 pb-4 bg-gray-50 rounded-lg">
          <h3 className="pt-4 pr-2 mb-6 text-sm text-black h-10">
            {author.first_name} {author.last_name}
          </h3>
          {/* <Link to={`/products/${product._id}`}>
            <button
              type="button"
              className="mt-4 shadow-sm text-sm font-medium text-black  border-b-2 border-green-500 transition duration-500 ease-in-out transform hover:scale-90 hover:translate-y-1"
            >
              Detalles de producto
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
}
export default AuthorCard;
