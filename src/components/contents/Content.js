import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { GlobalContext } from "../context/GlobalContext";

export default function Content() {
  const { tourCollectionQuery } = useContext(GlobalContext);

  const result = tourCollectionQuery ? tourCollectionQuery[0] : null;
  const result2 = result ? result.Items : null;
  const result3 = result2 ? Object.values(result2) : null;
  const result4 = result3
    ? result3.map(item => (
        <Link
          to={`/api/tour-collections/${item.id}/details.json`}
          className="link"
          key={item.id}
        >
          <div
            className="content-img"
            style={{
              backgroundImage: `url(${item.carousel[0].image_path})`
            }}
          >
            <div className="price-tag row">
              <div className="current-price card-text">
                {" "}
                &#8369;
                {Math.round(item.promo.discounted_rate)}
              </div>
              <div className="original-price card-text">{item.price}</div>
              <div className="discount-amount card-text">
                {Math.round((item.promo.price_off / item.price) * 100)} %OFF
              </div>
            </div>
          </div>
          <div className="content-description m-1">
            <p className="content-type mb-0">{item.category}</p>
            <p className="content-name mb-0">{item.name}</p>
            <p className="content-location m-0">
              {item.address.city.name + ", " + item.address.province.name}
            </p>
            <p className="content-rating m-0 ">Stars</p>
          </div>
        </Link>
      ))
    : null;
  return (
    <div className="content d-flex flex-wrap justify-content-center">
      {result4}
    </div>
  );
}
