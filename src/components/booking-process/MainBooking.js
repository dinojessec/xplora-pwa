import React from "react";
import InputContextProvider from "../context/InputContext";

import ReactDates from "./ReactDates";
import SelectNumberOfGuest from "./SelectNumberOfGuest";

const MainBooking = () => {
  // window
  //   .$(document)
  //   .on(
  //     "click",
  //     ".booking-content .booking-content-item .dropdown-menu",
  //     function(e) {
  //       e.stopPropagation();
  //     }
  //   );

  // const handleClose = () => {
  //   // window.$(".btn-update").dropdown("toggle");
  //   window.$(".btn-update").click(function() {
  //     window
  //       .$(this)
  //       .parents(".test")
  //       .find("div.test")
  //       .dropdown("toggle");
  //   });
  // };
  return (
    <InputContextProvider>
      <div className="booking-content row p-2">
        <div className="booking-content-item col-sm-12">
          <h2>Tour Title</h2>
        </div>
        <div className="booking-content-item col-sm-12">
          <h2>Tour Details</h2>
        </div>
        <div className="booking-content-item col-sm-12">
          <div className="row justify-content-center">
            <ReactDates className="col-md-6 col-lg-4 col-sm-12" />
            <div className="col-sm-12 col-md-3">
              <button
                className="button-update btn btn-secondary dropdown-toggle btn-block"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-display="static"
              >
                Guests
              </button>
              <div
                className="dropdown-menu w-100"
                aria-labelledby="dropdownMenuButton"
              >
                <SelectNumberOfGuest className="dropdown-item" />
              </div>
            </div>
          </div>
        </div>
        <div className="booking-content-item col-sm-12">
          <h2>Package detail</h2>
        </div>
        <div className="booking-content-item col-sm-12">
          <h2>Itinerary</h2>
        </div>
      </div>
    </InputContextProvider>
  );
};

export default MainBooking;
