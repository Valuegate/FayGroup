import React from 'react'

import Image from "next/image";
import WorkImage from "@/public/assets/product development/Worked With.svg"

const WorkedWith = () => {
  return (
    <div className='flex flex-col gap-10 items-center'>
        <p className="text-slate-950 text-xl font-medium leading-loose">Over 45k top brands we've worked with Faygroup</p>
        <Image src={WorkImage} alt="worked with" className='w-[60%]'/>
    </div>
  )
}

export default WorkedWith