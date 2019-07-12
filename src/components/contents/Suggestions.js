import React from "react";

export default function Suggestions() {
  return (
    <div className="suggestions">
      <div className="p-2">
        <button
          type="button"
          className="suggestions-button btn btn-outline-dark"
        >
          <strong>Day Tours</strong>
        </button>
      </div>
      <div className="p-2">
        <button
          type="button"
          className="suggestions-button btn btn-outline-dark"
        >
          <strong>Shows</strong>
        </button>
      </div>
      <div className="p-2">
        <button
          type="button"
          className="suggestions-button btn btn-outline-dark"
        >
          <strong>Attractions</strong>
        </button>
      </div>
      <div className="p-2">
        <button
          type="button"
          className="suggestions-button btn btn-outline-dark"
        >
          <strong>Food</strong>
        </button>
      </div>
      <div className="p-2">
        <button
          type="button"
          className="suggestions-button btn btn-outline-dark"
        >
          <strong>More filters</strong>
        </button>
      </div>
    </div>
  );
}
