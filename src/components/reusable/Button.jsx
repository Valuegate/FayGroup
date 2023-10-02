import React from "react";

import Link from "next/link";

const Button = ({children, style, destination = "/", onClick}) => {
  return (
    <Link className={style} href={destination} onClick={onClick}>
      {children}
    </Link>
  );
};

export default Button;
