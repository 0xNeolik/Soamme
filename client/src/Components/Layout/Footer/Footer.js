import React from "react";
import { Link } from "react-router-dom";
import { navigation } from "../../../Const/Const";
export default function Footer() {
  return (
    <footer className="pb-8">
      <div className="max-w-7xl mx-auto py-2 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {navigation.logged.map((item) => (
            <div key={item.name} className="px-5">
              <Link
                to={item.href}
                className="text-base text-gray-500 hover:text-indigo-500"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-indigo-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; 2022 Soamme Test, todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
