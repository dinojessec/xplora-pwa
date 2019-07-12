import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content row">
        <div className="footer-content-left col-sm-12 col-md-6 mr-0">
          <div>
            <img
              className="xplora-footer-icon-microtel"
              src={require("../../assets/microtelIcon.png")}
              alt="explora-icon"
            />
          </div>
          <div>
            <p>
              Exclusive Philippine Experiences <br /> curated for Microtel by
              Wyndham
            </p>
          </div>
        </div>
        <div className="footer-content-right col-sm-12 col-md-6 mr-0">
          <div>
            <img
              className="xplora-footer-icon-xplora"
              src={require("../../assets/explora.png")}
              alt="explora-icon"
            />
          </div>
          <div>
            <p>
              Explora.ph &copy; 2019 All rights reserved.
              <br /> Made with &lt;heart&gt; in the Philippines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
