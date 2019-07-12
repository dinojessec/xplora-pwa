import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-expand-sm navbar-light mr-4 ml-4">
      <NavLink className="navbar-brand ml-lg-5" exact to="/">
        <img
          className="header-icon"
          src={require("../../assets/microtelIcon.png")}
          alt="microtel-tours"
        />
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon justify-content-end" />
      </button>
      <div className="collapse navbar-collapse" id="navbar">
        <ul className="navbar-nav ml-auto mr-5">
          <li className="nav-item">
            <NavLink to="/manage-booking" className="nav-link">
              Booking
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/help" className="nav-link">
              Help
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/login" className="nav-link">
              Sign up / Log in
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
