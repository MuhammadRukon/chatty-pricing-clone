import { useEffect, useState } from "react";

const useGetData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // fetch and set data
    const fetchData = async () => {
      const response = await fetch("/data.json");
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);
  return data;
};

export default useGetData;
