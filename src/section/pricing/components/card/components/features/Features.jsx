import React, { useState } from "react";
import { useSelector } from "react-redux";
import Item from "./components/Item";
import MainItem from "./components/MainItem";

const Features = ({ planName, cardData }) => {
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
  console.log(cardData, "data");
  return (
    <div className="pb-6 space-y-3">
      <p className="text-slate font-semibold">
        {planName.toLowerCase() === "free"
          ? "Free includes:"
          : "Everything in free plus:"}
      </p>
      <div className="tooltip-container text-sm w-full text-slate track"></div>
      {cardData?.name?.toLowerCase() != "free" && <MainItem feat={cardData} />}
      {features.map((feat, idx) => (
        <Item key={idx} feat={feat} />
      ))}
    </div>
  );
};

export default Features;
