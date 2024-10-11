import React from "react";
import { FaAngleDown } from "react-icons/fa6";

const Dropdown = ({
  color,
  data,
  planData,
  dropdownRef,
  isOpen,
  setIsOpen,
  serial,
  setSerial,
}) => {
  return (
    <div
      style={{
        borderColor: color.primary,
        color: color.primary,
      }}
      ref={dropdownRef}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      className="p-2 my-3 border rounded-lg text-xs cursor-pointer"
    >
      <div className="flex items-center justify-between gap-1 w-full overflow-hidden">
        <span className="text-nowrap max-w-[137px] overflow-hidden text-ellipsis">
          {data?.title.replace("<strong>", "").replace("</strong>", "")}
        </span>
        <div
          className={`${
            isOpen ? "rotate-180" : ""
          } transition-all duration-200`}
        >
          <FaAngleDown size={14} />
        </div>
      </div>
      <div
        className={`absolute top-10 left-0 transition-all duration-200 ${
          isOpen ? "w-full z-50" : "opacity-0 -z-10 w-0 h-0"
        } bg-white  shadow-[0_0_10px_0_rgba(0,0,0,0.1)] rounded-lg`}
      >
        {planData.map((plan, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: idx === serial ? color.light : "white",
              color: color.primary,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = color.light)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor =
                idx === serial ? color.light : "white")
            }
            className="p-2 border-b last:border-none transition-all duration-100 text-sm cursor-pointer"
            onClick={() => setSerial(idx)}
          >
            <span className="text-nowrap">
              {plan?.title.replace("<strong>", "").replace("</strong>", "")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
