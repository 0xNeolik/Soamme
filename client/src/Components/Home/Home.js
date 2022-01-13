import { Link } from "react-router-dom";

import Books from "../../images/books-home.jpg";
import Writter from "../../images/writter-home.jpg";

export default function Example() {
  return (
    <div className="relative bg-white pt-16 pb-32 overflow-hidden">
      {
        //First section of Home
      }
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Quedate con los mejores libros
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Con Soamee Books disfrutaras de multitud de libros al alcanze
                  de tu mano. Toda la información que necesitas, que quieres y
                  que vas a utilizar en tu busqueda de libros. Contamos con
                  multitud de libros a tu disposición, simplemente con un click,
                  todo al alcanze de tu mano
                </p>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    &ldquo;El amor por los libros es algo así como el amor
                    romántico. Cuando se lee realmente un buen libro, las cargas
                    y preocupaciones parecen ser más pequeñas.&rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <img
                        className="h-6 w-6 rounded-full"
                        src="https://images.squarespace-cdn.com/content/v1/5ee39a386949b27bc9d123c7/1596050210761-27JBYN2ZU7T3G0L4I6IH/Steve_Leveen.jpg"
                        alt=""
                      />
                    </div>
                    <div className="mt-2 text-base font-medium text-gray-700">
                      Steve Leveen, Champion of bilingualism in America
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
            <div className="mt-6">
              <Link
                to="/libros"
                className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Ver todos los libros
              </Link>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src={Books}
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>
      </div>
      {
        //Second section of Home
      }
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Los mejores autores del momento
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Porque en Soamee Books cuidamos a nuestros usuarios y solo
                  queremos lo mejor para ellos, traemos las mejores obras
                  literalias del momento, de la mano de los mejores autores.
                </p>
                <div className="mt-6">
                  <Link
                    to="/autores"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Ver a nuestros autores
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src={Writter}
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
