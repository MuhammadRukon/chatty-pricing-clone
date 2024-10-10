import { useEffect } from "react";

const closeDropdownHandler = (dropdownRef, setIsOpen) => {
  useEffect(() => {
    const handleCloseOption = (e) => {
      if (!dropdownRef?.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleCloseOption);

    return () => {
      document.removeEventListener("click", handleCloseOption);
    };
  }, []);
};

export default closeDropdownHandler;
