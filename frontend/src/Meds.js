import React from "react";
import "./Meds.css";

function Meds({ name, tab_wt, price, composition, uses, side_effects }) {
  return (
    <div className="meds">
      <div className="meds__info">
        <p>
          {" "}
          <strong>Name</strong> :{name}
        </p>
        <p>
          <strong>Tablet Weight </strong>: {tab_wt}
        </p>
        <p>
          <strong>Price</strong> : {price}
        </p>
        <p>
          <strong>Composition</strong> : {composition}
        </p>
        <p>
          <strong>Uses </strong>: {uses}
        </p>
        <p>
          <strong>Side Effects </strong>: {side_effects}
        </p>
      </div>
    </div>
  );
}

export default Meds;
