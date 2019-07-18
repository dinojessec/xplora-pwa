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
    try {
      const baseUrl = `http://${
        process.env.REACT_APP_API_HOST
      }/api/tour-collections.json?source_url=${
        process.env.REACT_APP_SOURCE_URL
      }`;
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
    } catch {
      console.log("error getting response");
    }
  };

  render() {
    const { isLoading } = this.state;
    const entryTourCollection = this.state.data.EntryTourCollection;
    const tourCollectionQuery = this.state.data.TourCollectionQuery;

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
