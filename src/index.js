import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "store";
import { PersistGate } from "redux-persist/integration/react";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this website
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import ServicesPage from "views/ServicesPage/ServicesPage.js";
import BookingPage from "views/BookingPage/BookingPage.js";
import RegisterPage from "views/RegisterPage/RegisterPage.js";
import DashboardPage from "views/DashboardPage/DashboardPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={hist}>
        <Switch>
          <Route path="/services" component={ServicesPage} />
          {/* <Route path="/booking" component={BookingPage} /> */}
          <Route path="/about" component={ProfilePage} />
          {/* <Route path="/register" component={RegisterPage} /> */}
          {/* <Route path="/login" component={LoginPage} /> */}
          {/* <Route path="/dashboard" component={DashboardPage} /> */}
          <Route path="/" component={LandingPage} />
        </Switch>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
