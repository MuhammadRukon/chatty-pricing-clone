import { useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

const Card = ({ planData, color }) => {
  const [serial, setSerial] = useState(0);
  const [data, setData] = useState(planData[serial]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    setData(planData[serial]);
  }, [serial]);

  useEffect(() => {
    const handleCloseOption = (e) => {
      if (!dropdownRef?.current?.contains(e.target)) {
        console.log("inside");
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleCloseOption);

    return () => {
      document.removeEventListener("click", handleCloseOption);
    };
  }, []);

  return (
    <div
      style={{
        boxShadow: `inset 0 10px ${color.primary}`,
      }}
      className="border p-4 m-2 rounded-lg text-slate"
    >
      <p className="text-lg">{data?.name}</p>
      <p
        className="font-semibold text-3xl"
        style={{
          color: color.primary,
        }}
      >
        {data?.price}
        <span className="text-slateLight font-normal text-sm ml-1">
          {data.price.includes("$") ? " /Month" : ""}
        </span>
      </p>
      {planData.length > 1 ? (
        <div
          style={{
            borderColor: color.primary,
            color: color.primary,
          }}
          ref={dropdownRef}
          onClick={() => {
            setIsOpen(!isOpen);
            console.log("ami korsi");
          }}
          className="py-2 relative px-3 my-3 border rounded-lg text-xs w-fit cursor-pointer"
        >
          <div className="flex items-center gap-2 ">
            <span>
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
              isOpen ? "w-full" : "opacity-0 -z-10 w-0 h-0"
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
      <button></button>
    </div>
  );
};

export default Card;
