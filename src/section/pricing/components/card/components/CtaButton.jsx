import React, { useState } from "react";
import { useSelector } from "react-redux";

const CtaButton = ({ color, data }) => {
  const [bgColor, setBgColor] = useState(color.primary);
  const { billingDuration } = useSelector((state) => state.billingDuration);
  return (
    <button
      className="mt-auto rounded-[8px] text-white leading-10 transition-all duration-150"
      style={{ background: bgColor }}
      onMouseEnter={() => setBgColor(color.dark)}
      onMouseLeave={() => setBgColor(color.primary)}
    >
      {data.details[billingDuration].btn_text}
    </button>
  );
};

export default CtaButton;
