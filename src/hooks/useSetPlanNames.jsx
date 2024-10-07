import { useEffect, useState } from "react";

const useSetPlanNames = (data) => {
  const [planNames, setPlanNames] = useState([]);
  useEffect(() => {
    const names = [...new Set(data?.plans?.map((item) => item.name))];
    setPlanNames(names);
  }, [data]);
  return planNames;
};

export default useSetPlanNames;
