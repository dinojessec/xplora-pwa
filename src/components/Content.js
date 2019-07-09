import React, { useState } from "react";

// import Calendar from "./calendar/Calendar";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function Content() {
  const [count, setCount] = useState(0);
  const [dates, setDate] = useState({
    startDate: new Date()
  });
  console.log(dates);
  const handleChange = input => {
    let month = "" + (input.getMonth() + 1),
      day = "" + input.getDate(),
      year = input.getFullYear(),
      hours = input.getHours(),
      minutes = input.getMinutes(),
      seconds = input.getSeconds();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    // return [year, month, day].join('-');

    console.log(input);
    console.log(month);
    console.log(day);
    console.log(year);
    setDate({
      startDate:
        [year, month, day].join("-") + " " + [hours, minutes, seconds].join(":")
    });
  };

  return (
    <div className="container">
      <button onClick={() => setCount(count + 1)}>click me</button>
      <div className="card m-3">
        {count % 2 === 0 ? (
          <DatePicker
            dateFormat={"MMMM d, yyyy"}
            selected={new Date()}
            onChange={handleChange}
          />
        ) : (
          ""
        )}
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
