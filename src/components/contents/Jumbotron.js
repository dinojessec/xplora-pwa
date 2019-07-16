import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalContext";

export default function Jumbotron() {
  const { entryTourCollection } = useContext(GlobalContext);
  const x = entryTourCollection;
  return (
    <div className="jumbotron">
      {typeof x !== "undefined" ? (
        <div>
          <img
            className="jumbo-img"
            // src={x.image_path}
            alt="..."
          />
          <div className="welcome-message align-top">
            <h2>Hello, *name of user*! Welcome to *location.</h2>
          </div>
          <div className="intro-message align-middle">
            <h1>Book unique things to do near Microtel by Wyndham</h1>
          </div>
        </div>
      ) : null}
    </div>
  );
}
