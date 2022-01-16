import React, { useEffect, useState } from "react";
import AuthorService from "../../Services/AuthorsServices/authors.service";
import EditAuthor from "./EditAuthor/EditAuthor";

let service = new AuthorService();

export default function AuthorDetails(props) {
  let [author, setAuthor] = useState();
  let logged = props.loggedUser;
  const { id } = props.match.params;

  useEffect(() => {
    loadAuthor();
    window.scrollTo(0, 0);
  }, []);

  let loadAuthor = () => {
    service.getOneAuthor(id).then((result) => {
      setAuthor((author = result.data));
    });
  };

  return (
    <div className="bg-gray-200 lg:pb-80">
      <div className="lg:flex lg:justify-between mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24 ">
        <div className="lg:flex lg:justify-between my-auto ">
          <img
            className="h-40 mx-auto lg:mx-0 w-40 rounded-full xl:w-56 xl:h-56 lg:mr-20 my-auto border border-indigo-600 p-2"
            src={author?.img_url}
            alt="User"
          />
          <div className="flex lg:justify-between justify-center mt-8 ">
            <div className="font-medium text-lg lg:text-start text-center lg:text-left ">
              <h3 className="text-black">
                <span className="text-indigo-500">
                  {" "}
                  {author?.first_name} {author?.last_name}
                </span>
              </h3>
              <div className="text-black text-sm my-2">
                Allias:{" "}
                <span className="text-indigo-500 text-sm my-2">
                  {author?.allias}
                </span>
              </div>
              {logged && (
                <div className="inline-flex">
                  <EditAuthor author={author} loadAuthor={loadAuthor} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
