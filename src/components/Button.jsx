import React from "react";

const Button = ({ children, style }) => {
  return (
    <button
      className={`${style} font-poppins font-medium w-[140px] border-[1px] border-black-100 py-4 rounded-xl`}
    >
      {children}
    </button>
  );
};

export default Button;
