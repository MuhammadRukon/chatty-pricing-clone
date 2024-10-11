import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Tab from "./components/Tab";
import { setBillingDuration } from "../../../../redux/features/billingDurationSlice";

const Tabs = () => {
  const { data } = useSelector((state) => state.data);
  const [tabInfo, setTabInfo] = useState();
  const [tabTexts, setTabTexts] = useState([]);
  const { billingDuration } = useSelector((state) => state.billingDuration);
  const dispatch = useDispatch();
  useEffect(() => {
    let tabNames;
    if (data) {
      tabNames = Object.keys(data.plansInfo);
      setTabTexts(tabNames);
      setTabInfo(data.plansInfo);
    }
    if (!billingDuration && tabNames) dispatch(setBillingDuration(tabNames[0]));
  }, [data]);

  const handleDurationChange = (duration) => {
    dispatch(setBillingDuration(duration));
  };

  return (
    <div className="flex justify-center gap-4">
      {tabTexts.map((text, idx) => (
        <Tab
          key={idx}
          info={tabInfo[text]}
          isActive={text === billingDuration}
          handleClick={() => handleDurationChange(text)}
        />
      ))}
    </div>
  );
};

export default Tabs;
