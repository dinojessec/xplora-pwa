import React from "react";
import Octicon, { Plus, Dash } from "@primer/octicons-react";

const SelectNumberOfGuest = ({ handleClose }) => {
  // const [guests, setGuests] = useState({})

  return (
    <div className="test p-2">
      <div className="row">
        <div className="col-sm-6 p-2">Adult</div>
        <div className="minus-btn col-sm-2 p-2">
          <Octicon icon={Dash} />
        </div>
        <div className="col-sm-2 p-2">
          <input type="text" className="form-control m-1" maxLength="2" />
        </div>
        <div className="plus-btn col-sm-2 p-2">
          <Octicon icon={Plus} />
        </div>
      </div>
      <div className="dropdown-divider" />
      <div className="row">
        <div className="col-sm-6 p-2">Children</div>
        <div className="minus-btn col-sm-2 p-2">
          <Octicon icon={Dash} />
        </div>
        <div className="col-sm-2 p-2">
          <input type="text" className="form-control m-1" />
        </div>
        <div className="plus-btn col-sm-2 p-2">
          {" "}
          <Octicon icon={Plus} />
        </div>
      </div>
      <div className="dropdown-divider" />
      <div className="row">
        <div className="col-sm-6 p-2">Infant</div>
        <div className="minus-btn col-sm-2 p-2">
          <Octicon icon={Dash} />
        </div>
        <div className="col-sm-2 p-2">
          <input type="text" className="form-control m-1" />
        </div>
        <div className="plus-btn col-sm-2 p-2">
          <Octicon icon={Plus} />
        </div>
      </div>
      {/* update button */}
      <div className="dropdown-divider" />
      <div className="row justify-content-center">
        <button
          type="button"
          className="btn-update btn btn-info btn-block"
          onClick={handleClose}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default SelectNumberOfGuest;
