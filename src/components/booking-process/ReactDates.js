import React, { Component } from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";
import { START_DATE, END_DATE } from "react-dates/constants";
import { InputContext } from "../context/InputContext";

export default class ReactDates extends Component {
  static contextType = InputContext;
  state = {
    startDate: null,
    endDate: null,
    focusedInput: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate });
    if (startDate && endDate) {
      const { handleDateInput } = this.context;
      // date format "WEEK, MONTH-DATE-YEAR"
      const formattedStartDate = startDate.format("dddd, MMMM Do YYYY");
      const formattedEndDate = endDate.format("dddd, MMMM Do YYYY");
      handleDateInput({ formattedStartDate, formattedEndDate });
    }
  };

  onFocusChange = focusedInput => this.setState({ focusedInput });

  // componentDidUpdate(prevProps, prevState) {
  //   if (
  //     prevState.focusedInput !== this.state.focusedInput &&
  //     this.state.focusedInput === END_DATE
  //   ) {
  //     alert("End date is focused!"); // your code here
  //   }

  //   if (prevState.endDate !== this.state.endDate) {
  //     alert("End date is changed!"); // your code here
  //   }
  // }

  render() {
    const { startDate, endDate, focusedInput } = this.state;

    return (
      <DateRangePicker
        numberOfMonths={1}
        startDate={startDate}
        startDateId={START_DATE}
        endDate={endDate}
        endDateId={END_DATE}
        onDatesChange={this.onDatesChange}
        focusedInput={focusedInput}
        onFocusChange={this.onFocusChange}
        // orientation={VERTICAL_ORIENTATION}
      />
    );
  }
}
