import React from "react";

import Link from "next/link";

const Button = ({ children, style, destination = "/", onClick }) => {
  return destination !== "/" ? (
    <Link className={style} href={destination} onClick={onClick}>
      {children}
    </Link>
  ) : (
    <button className={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
