import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setPricingData } from "../redux/features/dataSlice";

const useGetData = () => {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    // fetch and set data
    const fetchData = async () => {
      const response = await fetch(
        "https://gist.githubusercontent.com/mollahdev/a816bbdcdaf822c6f0178bc02b9766d1/raw/451694d939b1bd7fcd6703bb3430cae0931a40ed/pricing%2520table%2520data"
      );
      const data = await response.json();
      setData(data);
    };
    fetchData();
    data && dispatch(setPricingData(data));
  }, []);
  return data;
};

export default useGetData;
