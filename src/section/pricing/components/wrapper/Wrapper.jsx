import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="container mx-auto max-w-6xl gap-4 mt-6 grid sm:grid-cols-2 lg:grid-cols-4">
      {children}
    </div>
  );
};

export default Wrapper;
