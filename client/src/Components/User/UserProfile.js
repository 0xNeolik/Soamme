import React, { useEffect, useState } from "react";
import UserService from "../../Services/UserServices/user.service";

let userService = new UserService();

export default function UserProfile(props) {
  const [ownerProfile, setOwnerProfie] = useState(props.match.params.id);
  const [owner, setOwner] = useState();

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
        <div className="lg:flex lg:justify-between mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24 ">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
