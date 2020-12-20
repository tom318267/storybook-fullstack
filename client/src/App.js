import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import Stories from "./components/Stories/Stories";
import ShowStory from "./components/ShowStory/ShowStory";
import AddStory from "./components/AddStory/AddStory";
import ContactForm from "./components/ContactForm/ContactForm";
import { loadUser } from "./actions/auth";
import { LOGOUT } from "./actions/types";
import PrivateRoute from "./routing/PrivateRoute";
import "./App.css";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import EditStory from "./components/EditStory/EditStory";

const App = () => {
  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/contact" component={ContactForm} />
            <PrivateRoute exact path="/stories" component={Stories} />
            <PrivateRoute exact path="/stories/:id" component={ShowStory} />
            <PrivateRoute exact path="/add-story" component={AddStory} />
            <PrivateRoute exact path="/edit/:id" component={EditStory} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
