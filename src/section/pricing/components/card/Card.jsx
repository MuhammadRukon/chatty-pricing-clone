import { useEffect, useState } from "react";
import CardHeader from "./components/Header";
import CtaButton from "./components/CtaButton";
import Summary from "./components/summary/Summary";
import Features from "./components/features/Features";

const Card = ({ planData, color }) => {
  const [serial, setSerial] = useState(0);
  const [data, setData] = useState(planData[serial]);
  const [mainFeature, setMainFeature] = useState("main feature");
  useEffect(() => {
    setData(planData[serial]);
  }, [serial]);
  return (
    <div
      style={{
        // boxShadow: `inset 0 10px ${color.primary}`,
        borderTop: `8px solid ${color.primary}`,
      }}
      className="border w-full border-[#eaeff2] p-4 pt-0 rounded-lg flex flex-col text-slate"
    >
      <CardHeader data={data} color={color} />
      <Summary
        planData={planData}
        color={color}
        data={data}
        setSerial={setSerial}
        setData={setData}
        serial={serial}
      />
      <Features planName={data?.name} cardData={data} />
      <CtaButton color={color} data={data} />
    </div>
  );
};

export default Card;
