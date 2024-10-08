import React, { useEffect, useState } from "react";
import Card from "./components/card/Card";
import Wrapper from "./components/wrapper/Wrapper";
import useGetData from "../../hooks/useGetData";
import useSetPlanNames from "../../hooks/useSetPlanNames";
import useModifyData from "../../hooks/useModifyData";

const PricingSection = () => {
  // get data
  const data = useGetData();
  // set plan names
  const planNames = useSetPlanNames(data);
  // modify data
  const modifiedData = useModifyData(planNames, data);
  const colors = new Map([
    [0, { primary: "#4cb3fd", light: "#e5f2ff" }],
    [1, { primary: "#ffb72c", light: "#fff0d9" }],
    [2, { primary: "#68cb9b", light: "#d8fdf0" }],
    [3, { primary: "#b78deb", light: "#f7f5fb" }],
  ]);
  console.log(data, "data");
  return (
    <div className="h-[100vh] w-full flex items-center text-text justify-center font-rubik">
      <Wrapper>
        {Array.from(modifiedData.entries()).map(([name, data], idx) => (
          <Card
            key={idx}
            planName={name}
            planData={data}
            color={colors.get(idx)}
          />
        ))}
      </Wrapper>
    </div>
  );
};

export default PricingSection;
