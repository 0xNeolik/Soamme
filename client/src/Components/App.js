import { Switch, Route } from "react-router-dom";
import React from "react";

import Footer from "./Layout/Footer/Footer";
import Home from "./Home/Home";
import Authors from "./Authors/Authors";
import Books from "./Books/Books";

function App() {
  return (
    <>
      <main>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <div>
                <Home />
                <Footer />
              </div>
            )}
          />
          <Route
            path="/autores"
            exact
            render={() => (
              <div>
                <Authors />
                <Footer />
              </div>
            )}
          />
          <Route
            path="/libros"
            exact
            render={() => (
              <div>
                <Books />
                <Footer />
              </div>
            )}
          />
        </Switch>
      </main>
    </>
  );
}

export default App;
