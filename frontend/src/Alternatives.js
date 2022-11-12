import React from "react";
import "./Alternatives.css";

function Alternatives({ name, price, manuf, diff }) {
  return (
    <div className="alternatives">
      <p>{name}</p>
      <p>{price}</p>
      <p>{manuf}</p>
      <p>{diff}</p>
    </div>
  );
}

export default Alternatives;
