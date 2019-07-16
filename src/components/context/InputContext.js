import React, { createContext } from "react";

export const InputContext = createContext();

export default class InputContextProvider extends React.Component {
  state = {
    testState: true
  };

  handleDateInput = input => {
    const { formattedStartDate, formattedEndDate } = input;
    this.setState({ ...this.state, formattedStartDate, formattedEndDate });
    // console.log(input);
  };
  render() {
    return (
      <InputContext.Provider
        value={{ ...this.state, handleDateInput: this.handleDateInput }}
      >
        {this.props.children}
      </InputContext.Provider>
    );
  }
}

