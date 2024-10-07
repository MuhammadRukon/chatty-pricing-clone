import React, { useEffect, useState } from "react";
import Card from "./components/card/Card";
import Wrapper from "./components/wrapper/Wrapper";

const PricingSection = () => {
  const [data, setData] = useState(null);
  const [planNames, setPlanNames] = useState([]);
  const [modifiedData, setModifiedData] = useState(new Map());

  // fetch and set data
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://gist.githubusercontent.com/mollahdev/a816bbdcdaf822c6f0178bc02b9766d1/raw/451694d939b1bd7fcd6703bb3430cae0931a40ed/pricing%2520table%2520data"
      );
      const data = await response.json();
      setData(data);
      // get all plan names unique
      const names = [...new Set(data?.plans?.map((item) => item.name))];
      setPlanNames(names);
    };
    fetchData();
  }, []);

  useEffect(() => {
    // modify data
    const newMap = new Map();

    planNames.forEach((name) => {
      const filteredData = data?.plans?.filter((item) => item.name === name);
      newMap.set(name, filteredData);
    });
    setModifiedData(newMap);
  }, [planNames.length]);

  Array.from(modifiedData.entries()).forEach(([key, value]) => {
    console.log(key + " is " + value);
  });

  return (
    <div className="h-[100vh] w-full flex items-center justify-center">
      <Wrapper></Wrapper>
    </div>
  );
};

export default PricingSection;
