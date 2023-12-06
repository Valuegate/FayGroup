import React from 'react'

import Image from 'next/image';

import Circle1 from "@/public/assets/landing-page/Ellipse 1.svg";
import Circle2 from "@/public/assets/landing-page/Ellipse 2.svg";

const EllipseStack = () => {
  return (
    <div className="relative lg:hidden">
        <Image src={Circle2} alt="ellipse 2" className = "absolute z-10 top-0 left-5"/>
        <Image src={Circle1} alt="ellipse 1" className="z-10 top-0 left-0"/>
    </div>
  )
}

export default EllipseStack