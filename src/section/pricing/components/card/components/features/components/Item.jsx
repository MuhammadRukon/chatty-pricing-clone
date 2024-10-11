import React from "react";
import Tooltip from "../../../../../../../partials/components/tooltip/Tooltip";

const Item = ({ feat }) => {
  return (
    <div className="tooltip-container text-sm w-full text-slate">
      <p className="text-nowrap">{feat.feature_title}</p>
      <Tooltip desc={feat.feature_desc} />
    </div>
  );
};

export default Item;
