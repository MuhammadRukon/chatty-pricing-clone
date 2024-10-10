import React, { useState } from "react";
import { useSelector } from "react-redux";
import Item from "./components/Item";

const Features = ({ planName }) => {
  const { data } = useSelector((state) => state.data);
  const [features, setFeatures] = useState([]);

  if (planName.toLowerCase() === "free") {
    const filteredFeatures = data.features.filter((feat) => feat.is_pro == 0);
    if (!features.length) {
      setFeatures(filteredFeatures);
    }
  } else {
    const filteredFeatures = data.features.filter((feat) => feat.is_pro == 1);
    if (!features.length) {
      setFeatures(filteredFeatures);
    }
  }
  return (
    <div className="pb-2 space-y-[10px]">
      <p className="text-slate font-semibold">
        {planName.toLowerCase() === "free"
          ? "Free includes:"
          : "Everything in free plus:"}
      </p>

      {features.map((feat, idx) => (
        <Item key={idx} feat={feat} />
      ))}
    </div>
  );
};

export default Features;
