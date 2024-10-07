import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="container mx-auto bg-red-400 grid grid-cols-4">
      {children}
    </div>
  );
};

export default Wrapper;
