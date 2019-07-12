import React from "react";

export default function Jumbotron() {
  return (
    <div className="jumbotron">
      <img
        className="jumbo-img"
        src={require("../../assets/DSC00591.jpg")}
        alt="..."
      />

      <div className="welcome-message align-top">
        <h2>Hello, *name of user*! Welcome to *location.</h2>
      </div>
      <div className="intro-message align-middle">
        <h1>Book unique things to do near Microtel by Wyndham</h1>
      </div>
    </div>
  );
}
