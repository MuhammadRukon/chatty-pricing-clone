import { useEffect, useState } from "react";
import CardHeader from "./components/Header";
import DropDown from "./components/DropDown";
import Summary from "./components/Summary";
import Features from "./features/Features";
import CtaButton from "./components/CtaButton";

const Card = ({ planData, color }) => {
  const [serial, setSerial] = useState(0);
  const [data, setData] = useState(planData[serial]);
  useEffect(() => {
    setData(planData[serial]);
  }, [serial]);
  return (
    <div
      style={{
        boxShadow: `inset 0 10px ${color.primary}`,
      }}
      className="border p-4 rounded-lg flex flex-col text-slate"
    >
      <CardHeader data={data} color={color} />
      <Summary
        planData={planData}
        color={color}
        data={data}
        setSerial={setSerial}
        setData={setData}
        DropDown={DropDown}
      />
      <Features planName={data?.name} />
      <CtaButton color={color} data={data} />
    </div>
  );
};

export default Card;
