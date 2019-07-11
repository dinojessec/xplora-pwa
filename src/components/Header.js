import React from "react";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-expand-sm navbar-light p-4 mr-4 ml-4">
      <a className="navbar-brand ml-lg-5" href="/">
        Icon
      </a>
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
            <a href="/" className="nav-link">
              Booking
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Help
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Sign up / Log in
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
