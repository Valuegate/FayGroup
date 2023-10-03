import React from 'react'

import Image from "next/image";
import WorkImage from "@/public/assets/product development/Worked With.svg"

const WorkedWith = () => {
  return (
    <div className='flex flex-col gap-10 items-center sm:px-[5%]'>
        <p className="text-slate-950 text-xl sm:text-center font-medium leading-loose">Over 45k top brands we've worked with Faygroup</p>
        <Image src={WorkImage} alt="worked with" className='w-[60%] sm:w-full'/>
    </div>
  )
}

export default WorkedWith