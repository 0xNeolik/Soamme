import React, { useEffect, useState } from "react";
import UserService from "../../Services/UserServices/user.service";
import BookCard from "../Books/BookCard";

let userService = new UserService();

export default function UserProfile(props) {
  const [ownerProfile, setOwnerProfie] = useState(props.match.params.id);
  const [owner, setOwner] = useState();
  const [showFavorites, setShowFavorites] = useState(false);
  const [closeFavorites, setCloseFavorites] = useState(false);

  let renderFavorites = () => {
    setShowFavorites(true);
    return setCloseFavorites(false);
  };

  let closedFavorites = () => {
    setCloseFavorites(true);
    return setShowFavorites(false);
  };

  useEffect(() => {
    loadOwner();
    setOwnerProfie(props.match.params.id);
  }, []);

  useEffect(() => {
    setOwnerProfie(props.match.params.id);
    loadOwner();
  }, [props.match.params.id]);

  let loadOwner = () => {
    userService
      .getOwner(props.match.params.id)
      .then((result) => {
        setOwner(result.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="bg-gray-200 lg:pb-80">
        <div className="lg:flex lg:justify-between mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-12 ">
          <div className="lg:flex lg:justify-between my-auto ">
            <img
              className="h-40 mx-auto lg:mx-0 w-40 rounded-full xl:w-56 xl:h-56 lg:mr-20 my-auto border border-indigo-600 p-2"
              src={owner?.img_url}
              alt="User"
            />
            <div className="flex lg:justify-between justify-center mt-8 ">
              <div className="font-medium text-lg lg:text-start text-center lg:text-left ">
                <h3 className="text-black">
                  {" "}
                  Nombre de Usuario:{" "}
                  <span className="text-indigo-500">{owner?.username}</span>
                </h3>
                <div className="text-black text-sm my-2">
                  Email:{" "}
                  <span className="text-indigo-500 text-sm my-2">
                    {owner?.email}
                  </span>
                </div>
                {showFavorites === false ? (
                  <>
                    <div className="flex lg:block">
                      <button
                        type="button"
                        onClick={renderFavorites}
                        className="mt-4 relative inline-flex items-center px-4 py-2 shadow-sm text-sm font-medium rounded-md text-indigo-500 border-2 border-indigo-500 hover:bg-indigo-600 hover:text-white"
                      >
                        Mostrar favoritos
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex lg:block">
                      <button
                        type="button"
                        onClick={closedFavorites}
                        className="mt-4 relative inline-flex items-center px-4 py-2 shadow-sm text-sm font-medium rounded-md text-indigo-500 border-2 border-indigo-500 hover:bg-indigo-600 hover:text-white"
                      >
                        Ocultar favoritos
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {showFavorites ? (
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mx-20">
            {owner?.favorites.map((favorite) => (
              <div key={favorite._id}>
                <BookCard book={favorite} />
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
