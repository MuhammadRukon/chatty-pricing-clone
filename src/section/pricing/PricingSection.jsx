import React, { useEffect, useState } from "react";
import Card from "./components/card/Card";
import Wrapper from "./components/wrapper/Wrapper";
import useGetData from "../../hooks/useGetData";
import useSetPlanNames from "../../hooks/useSetPlanNames";
import useModifyData from "../../hooks/useModifyData";
import { colors } from "../../constants/Index";
import { useDispatch } from "react-redux";
import { setPricingData } from "../../redux/features/dataSlice";
import Tabs from "./components/tabs/Tabs";

const PricingSection = () => {
  const dispatch = useDispatch();
  // get data
  const data = useGetData();
  useEffect(() => {
    dispatch(setPricingData(data));
  }, [data]);
  // set plan names
  const planNames = useSetPlanNames(data);
  // modify data
  const modifiedData = useModifyData(planNames, data);

  return (
    <div className="h-[100vh] w-full flex items-center text-text justify-center font-rubik">
      <div>
        <Tabs />
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
    </div>
  );
};

export default PricingSection;
