import React from "react";
import { useSelector } from "react-redux";

const CardHeader = ({ data, color }) => {
  const { billingDuration } = useSelector((state) => state.billingDuration);
  const initialPrice = data.details["1_year"].price;
  return (
    <>
      <p
        className="text-right -mr-2 w-fit ml-auto mt-2 h-6 text-white px-2 flex items-center justify-center rounded-[4px] text-xs"
        style={{
          background: data?.name?.toLowerCase() === "pro" ? color.primary : "", // may also be determined by - data from the server / 3rd card (idx/position === 2)
        }}
      >
        {data?.name?.toLowerCase() === "pro" ? "Most Popular" : ""}
      </p>
      <p className="text-lg">{data?.name}</p>

      <div className="flex items-center justify-start gap-1">
        <p
          className="font-semibold text-[32px]"
          style={{
            color: color.primary,
          }}
        >
          {data.details[billingDuration].price}
        </p>
        <div>
          <p className="h-4 font-normal text-xs ml-1 text-red-500 line-through">
            {initialPrice != data.details[billingDuration].price &&
              initialPrice + data.details[billingDuration].price_postfix}
          </p>

          <p className="text-slateLight font-normal text-sm ml-1">
            {data.details[billingDuration].price_postfix}
          </p>
        </div>
      </div>
    </>
  );
};

export default CardHeader;
