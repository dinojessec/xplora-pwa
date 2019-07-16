import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { GlobalContext } from "../context/GlobalContext";

export default function Content() {
  const { tourCollectionQuery } = useContext(GlobalContext);
  const [items, setItems] = useState([]);
  useEffect(items => setItems({ ...items, tourCollectionQuery }), [
    tourCollectionQuery
  ]);
  const result = tourCollectionQuery ? tourCollectionQuery[0] : null;
  const result2 = result ? result.Items : null;
  const result3 = result2 ? Object.values(result2) : null;
  // const result42 = result3 ? result3
  const result4 = result3
    ? result3.map(item => (
        <NavLink to="/" className="content-link" key={item.id}>
          <img
            src={item.carousel[0].image_path}
            className="content-img card-img-top"
            alt="..."
          />
          <div className="card-body content-description">
            <p className="card-text content-type mb-0">{item.category}</p>
            <p className="card-text content-name mb-0">{item.name}</p>
            <p className="card-text content-location">
              {item.address.city.name + " " + item.address.province.name}
            </p>
          </div>
        </NavLink>
      ))
    : null;
  console.log(result3);

  return (
    <div className="content">
      <div className="content-item card">{result4}</div>
    </div>
  );
}
