import React from "react";
import "./tooltip.css";
const Tooltip = ({ desc }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: desc }}
      className="p-1 shadow-[0_0_20px_rgba(0,0,0,0.1)] tooltip text-slate"
    ></div>
  );
};

export default Tooltip;
