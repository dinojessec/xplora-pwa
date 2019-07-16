import React, { createContext } from "react";

import Axios from "axios";

export const GlobalContext = createContext();

export default class GlobalContextProvider extends React.Component {
  state = {
    isLoading: true,
    data: ""
  };
  componentDidMount() {
    this.setState({ isLoading: false });
    this.loadResource();
  }

  loadResource = async () => {
    const baseUrl =
      "http://localhost/explora/api/tour-collections.json?source_url=localhost";
    const res = await Axios.get(baseUrl, {
      responseType: "json",
      headers: {
        "content-type": "application/x-www-form-urlencoded; application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE"
      }
    });
    const resources = res.data.Data;
    await this.setState({ data: resources });
  };

  render() {
    const { isLoading } = this.state;
    // const data = this.state.data;
    const entryTourCollection = this.state.data.EntryTourCollection;
    const tourCollectionQuery = this.state.data.TourCollectionQuery;
    // console.log(tourCollectionQuery);
    if (isLoading) {
      return null;
    } else {
      return (
        <GlobalContext.Provider
          value={{ entryTourCollection, tourCollectionQuery }}
        >
          {this.props.children}
        </GlobalContext.Provider>
      );
    }
  }
}
