import { Switch, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";

import AuthService from "../Services/AuthServices/auth.service";

import Footer from "./Layout/Footer/Footer";
import Home from "./Home/Home";
import Authors from "./Authors/Authors";
import AuthorDetails from "./Authors/AuthorDetails";
import Books from "./Books/Books";
import BookDetails from "./Books/BookDetails";
import NavBar from "./Layout/NavBar/NavBar";
import Login from "./Login/Login";
import SignUp from "./Signup/Signup";
import UserProfile from "./User/UserProfile";

let authService = new AuthService();

function App() {
  const [loggedUser, setLoggedUser] = useState(null);

  useEffect(() => {
    loadUser();
  }, []);

  let loadUser = () => {
    authService
      .isloggedin()
      .then((response) => {
        storeUser(response.data);
      })
      .catch((err) => storeUser(null));
  };

  let storeUser = (user) => {
    setLoggedUser(user);
  };

  return (
    <>
      <main>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <div>
                <NavBar
                  {...props}
                  loadUser={loadUser}
                  loggedUser={loggedUser}
                />
                <Home />
                <Footer />
              </div>
            )}
          />
          <Route
            path="/login"
            exact
            render={(props) => (
              <div>
                <Login {...props} loadUser={loadUser} />
              </div>
            )}
          />
          <Route
            path="/signUp"
            exact
            render={(props) => (
              <div>
                <SignUp {...props} loadUser={loadUser} />
              </div>
            )}
          />

          <Route
            path="/usuario/:id"
            exact
            render={(props) => (
              <div>
                <NavBar
                  {...props}
                  loadUser={loadUser}
                  loggedUser={loggedUser}
                />
                <UserProfile
                  {...props}
                  loadUser={loadUser}
                  loggedUser={loggedUser}
                />
              </div>
            )}
          />

          <Route
            path="/autores"
            exact
            render={(props) => (
              <div>
                <NavBar
                  {...props}
                  loadUser={loadUser}
                  loggedUser={loggedUser}
                />
                <Authors />
                <Footer />
              </div>
            )}
          />
          <Route
            path="/autores/:id"
            exact
            render={(props) => (
              <div>
                <NavBar
                  {...props}
                  loadUser={loadUser}
                  loggedUser={loggedUser}
                />
                <AuthorDetails {...props} loggedUser={loggedUser} />
              </div>
            )}
          />
          <Route
            path="/libros"
            exact
            render={(props) => (
              <div>
                <NavBar
                  {...props}
                  loadUser={loadUser}
                  loggedUser={loggedUser}
                />
                <Books />
                <Footer />
              </div>
            )}
          />
          <Route
            path="/libros/:id"
            exact
            render={(props) => (
              <div>
                <NavBar
                  {...props}
                  loadUser={loadUser}
                  loggedUser={loggedUser}
                />
                <BookDetails {...props} loggedUser={loggedUser} />
              </div>
            )}
          />
        </Switch>
      </main>
    </>
  );
}

export default App;
