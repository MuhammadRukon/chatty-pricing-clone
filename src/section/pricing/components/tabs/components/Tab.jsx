import React from "react";

const Tab = ({ info, handleClick, isActive }) => {
  return (
    <button onClick={handleClick} className="flex items-center gap-3 ">
      <p
        style={{
          borderBottom: isActive ? "2px solid #b78deb" : "none",
          color: isActive && "#b78deb",
          fontWeight: isActive ? "600" : "normal",
        }}
        className="text-slate"
      >
        {info.title}
      </p>
      {info.discount ? (
        <p className="rounded-full text-slate py-1 px-2 bg-purpleLight">
          {info.discount}
        </p>
      ) : (
        ""
      )}
    </button>
  );
};

export default Tab;
