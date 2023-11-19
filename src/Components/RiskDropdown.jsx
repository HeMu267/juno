import React from 'react'

export const RiskDropdown = ({handleRiskFilter,riskfilter}) => {
    let risks=["All","High","Medium","Low"];
  return (
    <div className='absolute z-20 bottom-0 translate-y-[105%] border-[0.25px] border-primaryStroke rounded-md bg-white w-56 flex justify-center p-[12px] bg-black  flex-col gap-2 shadow-lg'>
        {
            risks.map((risk)=>{
                return(
                    <button onClick={handleRiskFilter} value={risk} className={` ${risk===riskfilter?"bg-blueLight text-contentPrimary":" text-contentSecondary bg-white"} flex p-[6px] rounded-md text-[12px] font-medium`}>
                    {
                        risk
                    }
                    </button>
                )
            })
        }
    </div>
  )
}
