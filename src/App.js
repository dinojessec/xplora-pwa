import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/global/Header";
import Footer from "./components/global/Footer";

import Home from "./components/Views/Home";
import Booking from "./components/Views/Booking";
import Help from "./components/Views/Help";
import About from "./components/Views/About";
import Login from "./components/Views/Login";
import NotFound from "./components/Views/NotFound";
import MainBooking from "./components/booking-process/MainBooking";

import "./CustomApp.css";

import GlobalContextProvider from "./components/context/GlobalContext";

const App = () => {
  const basename = process.env.REACT_APP_API_HOST || "/";
  console.log(basename);
  return (
    <GlobalContextProvider>
      <BrowserRouter basename={basename}>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/manage-booking" component={Booking} />
            <Route path="/help" component={Help} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route
              // path="/api/tour-collections/:id/details.json?source_url=:src"
              path="/api/tour-collections/:id/details.json"
              component={MainBooking}
            />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </GlobalContextProvider>
  );
};

export default App;
