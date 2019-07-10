import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Modal = () => {
  const [dates, setDate] = useState({
    startDate: new Date()
  });

  const handleChange = input => {
    let month = "" + (input.getMonth() + 1),
      day = "" + input.getDate(),
      year = input.getFullYear(),
      hours = input.getHours(),
      minutes = input.getMinutes(),
      seconds = input.getSeconds();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    setDate({
      startDate:
        [year, month, day].join("-") + " " + [hours, minutes, seconds].join(":")
    });
  };
  return (
    <div>
      <DatePicker
        inline
        dateFormat={"MMMM d, yyyy"}
        selected={new Date()}
        selectsEnd
        onChange={handleChange}
      />
    </div>
  );
};

export default Modal;
