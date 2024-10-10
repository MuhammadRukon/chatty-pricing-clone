import React, { useEffect, useRef, useState } from "react";
import closeDropdownHandler from "../../../../../utils/closeDropdownHandler";

const Summary = ({ planData, color, data, DropDown, serial, setSerial }) => {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  closeDropdownHandler(dropdownRef, setIsOpen);

  return (
    <>
      {planData.length > 1 ? (
        <DropDown
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
    </>
  );
};

export default Summary;
