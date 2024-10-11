import { useEffect, useState } from "react";
import CardHeader from "./components/Header";
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
        // boxShadow: `inset 0 10px ${color.primary}`,
        borderTop: `8px solid ${color.primary}`,
      }}
      className="border w-full border-[#eaeff2] p-4 rounded-lg flex flex-col text-slate"
    >
      <CardHeader data={data} color={color} />
      <Summary
        planData={planData}
        color={color}
        data={data}
        setSerial={setSerial}
        setData={setData}
      />
      <Features planName={data?.name} />
      <CtaButton color={color} data={data} />
    </div>
  );
};

export default Card;
