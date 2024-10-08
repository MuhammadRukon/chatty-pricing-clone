import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="container mx-auto max-w-6xl  grid grid-cols-4">
      {children}
    </div>
  );
};

export default Wrapper;
