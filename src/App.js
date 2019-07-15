import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Axios from "axios";

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

function App() {
  const baseUrl = "http://localhost/explora/";

  useEffect(() => {
    Axios.get({
      method: "get",
      url: baseUrl,
      responseType: "stream",
      params: { origin: "*" },
      headers: { "content-type": "application/x-www-form-urlencoded" },
      // responseType: "json"
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/manage-booking" component={Booking} />
          <Route path="/help" component={Help} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/booking/main-booking" component={MainBooking} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
