import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { GlobalContext } from "../context/GlobalContext";

export default function Content() {
  const { tourCollectionQuery } = useContext(GlobalContext);

  const result = tourCollectionQuery ? tourCollectionQuery[0] : null;
  const result2 = result ? result.Items : null;
  const result3 = result2 ? Object.values(result2) : null;
  const result4 = result3
    ? result3.map(item => (
        <NavLink
          to={`/experience/${item.id}`}
          className="link"
          key={item.id}
          style={{
            textDecoration: "none",
            color: "black",
            position: "relative"
          }}
        >
          <div
            className="content-img"
            style={{
              backgroundImage: `url(${item.carousel[0].image_path})`,
              backgroundSize: "100% auto",
              maxWidth: "100%",
              maxHeight: "100%",
              width: "300px",
              height: "200px",
              borderRadius: "10px"
            }}
          >
            <div
              className="price-tag"
              style={{
                backgroundColor: "#fff",
                backgroundSize: "auto, auto",
                borderRadius: "2rem",
                padding: "0.2rem, 0.5rem",
                position: "absolute",
                bottom: "44%",
                left: "5%"
              }}
            >
              <div
                className="current-price card-text h6"
                style={{ fontWeight: "900" }}
              >
                {item.price}
              </div>
              <div className="original-price card-text h6" />
              <div className="discount card-text h6" />
            </div>
          </div>
          <div className="card-body content-description m-1">
            <p className="card-text content-type mb-0">{item.category}</p>
            <p className="card-text content-name mb-0">{item.name}</p>
            <p className="card-text content-location m-0">
              {item.address.city.name + " " + item.address.province.name}
            </p>
            <p className="card-text content-rating m-0">Stars</p>
          </div>
        </NavLink>
      ))
    : null;

  return (
    <div className="content d-flex flex-wrap justify-content-center">
      {result4}
    </div>
  );
}
