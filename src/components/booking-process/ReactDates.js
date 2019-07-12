import React, { Component } from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";
import { START_DATE, END_DATE } from "react-dates/constants";

export default class ReactDates extends Component {
  state = {
    startDate: null,
    endDate: null,
    focusedInput: null
  };

  onDatesChange = ({ startDate, endDate }) =>
    this.setState({ startDate, endDate });

  onFocusChange = focusedInput => this.setState({ focusedInput });

  //   componentDidUpdate(prevProps, prevState) {
  //     if (
  //       prevState.focusedInput !== this.state.focusedInput &&
  //       this.state.focusedInput === END_DATE
  //     ) {
  //       alert("End date is focused!"); // your code here
  //     }

  //     if (prevState.endDate !== this.state.endDate) {
  //       alert("End date is changed!"); // your code here
  //     }
  //   }

  render() {
    console.log(this.state.startDate);
    const { startDate, endDate, focusedInput } = this.state;

    return (
      <DateRangePicker
        startDate={startDate}
        startDateId={START_DATE}
        endDate={endDate}
        endDateId={END_DATE}
        onDatesChange={this.onDatesChange}
        focusedInput={focusedInput}
        onFocusChange={this.onFocusChange}
      />
    );
  }
}
