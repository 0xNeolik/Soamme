import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../Services/AuthServices/auth.service";
import LogoIndigo from "../../images/LogoIndigo.svg";

let authService = new AuthService();

export default function SignUp(props) {
  const [user, setUser] = useState({
    email: "",
    password: "",
    password2: "",
    username: "",
  });
  const [errMessage, setError] = useState(undefined);

  let handleSubmit = (e) => {
    e.preventDefault();
    !errMessage &&
      authService
        .signUp(user.username, user.email, user.password, user.password2)
        .then((response) => {
          props.loadUser();
          props.history.push("/");
        })
        .catch((err) => console.log("USER", err));
  };

  let handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    if (e.currentTarget.name === "password2" && e.currentTarget.value !== "") {
      e.currentTarget.value !== user.password
        ? setError("Las contraseñas no coinciden")
        : setError(undefined);
    }
    setUser((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-200">
        <nav
          className="relative max-w-7xl flex justify-start px-4 sm:px-6"
          aria-label="Global"
        >
          <div className="md:flex mx-3 md:mr-16">
            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-400 hover:bg-indigo-500"
            >
              Inicio
            </Link>
          </div>
        </nav>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-24 w-auto"
            src={LogoIndigo}
            alt="Workflow"
          />
          <h2 className="text-center text-2xl font-extrabold text-gray-900">
            Registrate en Soamee Books
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nombre
                </label>
                <div className="mt-1">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    onChange={handleInputChange}
                    value={user.username}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Dirección de correo
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={handleInputChange}
                    value={user.email}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Contraseña
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={handleInputChange}
                    value={user.password}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password2"
                  className="block text-sm font-medium text-gray-700"
                >
                  Comprobación de contraseña
                </label>
                <div className="mt-1">
                  <input
                    id="password2"
                    name="password2"
                    type="password"
                    onChange={handleInputChange}
                    value={user.password2}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {errMessage && <p className="text-red-500">{errMessage}</p>}
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Registrate
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    o inicia sesión en tu cuenta
                  </span>
                </div>
              </div>
            </div>
            <div>
              <Link
                to="/login"
                className="mt-6 w-full flex justify-center py-2 px-4 border border-indigo-600 rounded-md shadow-sm text-sm font-medium text-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:text-white hover:bg-indigo-600"
              >
                Iniciar sesión
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
