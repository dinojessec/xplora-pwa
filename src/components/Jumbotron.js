import React from "react";

export default function Jumbotron() {
  return (
    <div className="jumbotron">
      <img
        className="jumbo-img"
        src={require("../assets/DSC00591.jpg")}
        alt="..."
      />
      <div className="welcome-message">
        <h1>Welcome!</h1>
      </div>
      <div className="intro-message">
        <h1>Introduction</h1>
      </div>
    </div>
  );
}
