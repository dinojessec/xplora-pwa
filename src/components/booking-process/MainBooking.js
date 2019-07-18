import React from "react";
import ReactDates from "./ReactDates";
import Axios from "axios";

import InputContextProvider from "../context/InputContext";
import SelectNumberOfGuest from "./SelectNumberOfGuest";

export default class MainBooking extends React.Component {
  getRequest = async () => {
    try {
      // get this.props.match.url *** hostname still not included
      const url = `?source_url=${process.env.REACT_APP_SOURCE_URL}`;
      const getQuery = await Axios.get(url);
      const result = await getQuery.data;
      console.log(result);
      console.log(url);
    } catch {
      console.log("error on main booking");
    }
  };

  componentDidMount() {
    // this.getRequest();
    // console.log(this.props.match);
  }

  render() {
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
  }
}
// const MainBooking = ({ match }) => {
//   useEffect(
//     () =>

//       },
//     [match.path]
//   );
//   console.log(match);

//   return (

//   );
// };

// export default MainBooking;
