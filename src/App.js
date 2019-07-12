import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/global/Header";
import Footer from "./components/global/Footer";

import Home from "./components/Views/Home";
import Booking from "./components/Views/Booking";
import Help from "./components/Views/Help";
import About from "./components/Views/About";
import Login from "./components/Views/Login";

import "./CustomApp.css";
import NotFound from "./components/Views/NotFound";
import DateSelection from "./components/booking-process/DateSelection";

function App() {
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
          <Route path="/booking/date-selection" component={DateSelection} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
