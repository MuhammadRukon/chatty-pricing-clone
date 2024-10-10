import React from "react";
import { useSelector } from "react-redux";

const CardHeader = ({ data, color }) => {
  const { billingDuration } = useSelector((state) => state.billingDuration);
  const initialPrice = data.details["1_year"].price;
  console.log(initialPrice, "dfaslf;ajfk");
  return (
    <>
      <p className="text-lg">{data?.name}</p>
      <div className="flex items-end justify-start gap-1">
        <p
          className="font-semibold text-3xl"
          style={{
            color: color.primary,
          }}
        >
          {data.details[billingDuration].price}
        </p>
        <div>
          {initialPrice != data.details[billingDuration].price && (
            <p className=" font-normal text-sm ml-1 text-red-500 line-through">
              {initialPrice}
              {data.details[billingDuration].price_postfix}
            </p>
          )}
          <p className="text-slateLight font-normal text-sm ml-1">
            {data.details[billingDuration].price_postfix}
          </p>
        </div>
      </div>
    </>
  );
};

export default CardHeader;
