import React, { createContext, useEffect } from "react";

import Axios from 'axios';

export const InputContext = createContext();

const GlobalContextProvider = () => {
  state = {
    testState: true
  };

  
  render() {
    console.log(this.state);
    return (
      <GlobalContext.Provider
        value={{ ...this.state, handleDateInput: this.handleDateInput }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

export default GlobalContextProvider;
