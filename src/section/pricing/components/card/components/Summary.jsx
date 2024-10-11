import React, { useRef, useState } from "react";
import closeDropdownHandler from "../../../../../utils/closeDropdownHandler";
import { LuInfo } from "react-icons/lu";
import Tooltip from "./tooltip/Tooltip";
import Dropdown from "./Dropdown";

const Summary = ({ planData, color, data, serial, setSerial }) => {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  closeDropdownHandler(dropdownRef, setIsOpen);
  return (
    <div
      className={`flex gap-2 relative items-center ${
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
          style={{
            backgroundColor: color.light,
            color: color.primary,
          }}
          className="py-2 px-3 my-3 rounded-full text-xs w-fit"
          dangerouslySetInnerHTML={{ __html: data?.title }}
        ></div>
      )}

      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <LuInfo color={color.primary} />
      </div>
      <Tooltip style={{ bottom: "100%" }} desc={data?.text} />
    </div>
  );
};

export default Summary;
