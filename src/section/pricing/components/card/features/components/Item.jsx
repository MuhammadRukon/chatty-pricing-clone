import React from "react";
import Tooltip from "../../components/tooltip/Tooltip";

const Item = ({ feat }) => {
  return (
    <div className="tooltip-container text-sm w-full text-slate track">
      {feat.feature_title}
      <Tooltip desc={feat.feature_desc} />
    </div>
  );
};

export default Item;
