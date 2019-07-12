import React, { useState } from "react";

import Calendar from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePicker = () => {
  const [dates, setDate] = useState({
    startDate: "",
    endDate: ""
  });
  console.log({ dates });
  const handleStartChange = input => {
    let month = "" + (input.getMonth() + 1),
      day = "" + input.getDate(),
      year = input.getFullYear(),
      hours = input.getHours(),
      minutes = input.getMinutes(),
      seconds = input.getSeconds();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    const inputDate =
      [year, month, day].join("-") + " " + [hours, minutes, seconds].join(":");
    setDate({ startDate: inputDate });
  };
  const handleEndChange = input => {
    let month = "" + (input.getMonth() + 1),
      day = "" + input.getDate(),
      year = input.getFullYear(),
      hours = input.getHours(),
      minutes = input.getMinutes(),
      seconds = input.getSeconds();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    const inputDate =
      [year, month, day].join("-") + " " + [hours, minutes, seconds].join(":");
    setDate({ endDate: inputDate });
  };
  return (
    <div>
      <Calendar
        selected={new Date()}
        selectsStart
        startDate={dates.startDate}
        endDate={dates.endDate}
        onChange={handleStartChange}
      />
      <Calendar
        selected={dates.endDate}
        selectsEnd
        startDate={dates.startDate}
        endDate={dates.endDate}
        onChange={handleEndChange}
        minDate={dates.startDate}
      />
    </div>
  );
};

export default DatePicker;
