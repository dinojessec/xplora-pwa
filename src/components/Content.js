import React from "react";

import Calendar from "./calendar/Calendar";

export default function Content() {
  return (
    <div className="container">
      <div className="card m-3">
        <Calendar />
        <img
          src={require("../assets/DSC00591.jpg")}
          className="card-img-top"
          alt="mountain ocean"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">*insert content here*</p>
          <p className="card-text">
            <small className="text-muted">muted text</small>
          </p>
        </div>
      </div>
      <div className="card m-3">
        <img
          src={require("../assets/DSC00591.jpg")}
          className="card-img-top"
          alt="mountain ocean"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">*insert content here*</p>
          <p className="card-text">
            <small className="text-muted">muted text</small>
          </p>
        </div>
      </div>
    </div>
  );
}
