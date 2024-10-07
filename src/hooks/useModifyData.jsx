import { useEffect, useState } from "react";

const useModifyData = (planNames, data) => {
  const [modifiedData, setModifiedData] = useState(new Map());
  useEffect(() => {
    const newMap = new Map();
    // array of data based on plan names
    planNames?.forEach((name) => {
      const filteredData = data?.plans?.filter((item) => item.name === name);
      newMap.set(name, filteredData);
    });
    setModifiedData(newMap);
  }, [planNames]);
  return modifiedData;
};

export default useModifyData;
