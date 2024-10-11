import React, { useRef, useState } from "react";

import { LuInfo } from "react-icons/lu";

import closeDropdownHandler from "../../../../../../utils/closeDropdownHandler";
import Tooltip from "../../../../../../partials/components/tooltip/Tooltip";
import Dropdown from "./components/Dropdown";

const Summary = ({ planData, color, data, serial, setSerial }) => {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  closeDropdownHandler(dropdownRef, setIsOpen);
  return (
    <div
      style={{
        backgroundColor: planData.length > 1 ? "" : color.light,
        padding: planData.length > 1 ? "" : "0px 12px",
        color: color.primary,
      }}
      className={`flex gap-2 mt-1.5 mb-3 relative h-[36px]  items-center rounded-full justify-between ${
        isHovered ? "tooltip-container" : ""
      } `}
    >
      {planData.length > 1 ? (
        <Dropdown
          color={color}
          data={data}
          planData={planData}
          dropdownRef={dropdownRef}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          serial={serial}
          setSerial={setSerial}
        />
      ) : (
        <div
          className="rounded-full text-xs w-fit text-nowrap"
          dangerouslySetInnerHTML={{ __html: data?.title }}
        ></div>
      )}

      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <LuInfo color={color.primary} />
      </div>
      <Tooltip
        style={{ bottom: "120%", overflowWrap: "normal !important" }}
        desc={data?.text}
      />
    </div>
  );
};

export default Summary;
