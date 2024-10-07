import React from "react";

const Wrapper = ({ children }) => {
  return <div className="container mx-auto  grid grid-cols-4">{children}</div>;
};

export default Wrapper;
