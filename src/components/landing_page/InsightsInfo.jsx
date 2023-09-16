import React from 'react'

const InsightsInfo = () => {
  return (
    <div className="flex justify-between items-center w-[70%] mt-[28px]">
          <div className="flex flex-col items-center justify-center">
            <div className="text-pale text-2xl font-[600] leading-9">+345</div>
            <div className="text-slate-950 text-base font-normal leading-loose">
              Project Brands
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
          <div className="text-extraDarkRed text-2xl font-[600] leading-9">90%</div>
            <div className="text-slate-950 text-base font-normal leading-loose">
              Happy Clients
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
          <div className="text-sunYellow text-2xl font-[600] leading-9">100%</div>
            <div className="text-slate-950 text-base font-normal leading-loose">
              Client Satisfaction
            </div>
          </div>  
        </div>
  )
}

export default InsightsInfo