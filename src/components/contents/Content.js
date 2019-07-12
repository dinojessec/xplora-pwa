import React from "react";
import { NavLink } from "react-router-dom";

export default function Content() {
  // get data then assign into JSX
  return (
    <div className="content">
      <div className="content-item card">
        <NavLink to="/booking/date-selection" className="content-link">
          <img
            src={require("../../assets/DSC00591.jpg")}
            className="content-img card-img-top"
            alt="..."
          />
          <div className="card-body content-description">
            <p className="card-text content-type mb-0">Tour type</p>
            <p className="card-text content-name mb-0">Tour Name</p>
            <p className="card-text content-location">Tour Location</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
