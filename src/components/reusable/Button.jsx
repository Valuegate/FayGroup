import React from "react";

const Button = ({children, style}) => {
  return (
    <button className={style}>
      {children}
    </button>
  );
};

export default Button;
