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

  return (
    <div className="h-[100vh] w-full flex items-center justify-center">
      <Wrapper>
        {Array.from(modifiedData.entries()).map(([name, data], idx) => (
          <Card key={idx} planName={name} planData={data} />
        ))}
      </Wrapper>
    </div>
  );
};

export default PricingSection;
