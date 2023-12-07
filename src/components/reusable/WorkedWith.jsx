import React from 'react'

import Image from "next/image";
import WorkImage from "@/public/assets/product development/Worked With.svg"

const WorkedWith = () => {
  return (
    <div className='flex flex-col gap-10 items-center px-[5%] lg:px-0'>
        <p className="text-slate-950 text-xl text-center font-medium leading-loose">Over 15 top brands have worked with Faygroup</p>
        <Image src={WorkImage} alt="worked with" className='lg:w-[60%] w-full h-auto'/>
    </div>
  )
}

export default WorkedWith