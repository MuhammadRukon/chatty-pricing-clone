import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="mx-auto w-full max-w-6xl px-10 gap-4 mt-6 grid sm:grid-cols-2 lg:grid-cols-4">
      {children}
    </div>
  );
};

export default Wrapper;
