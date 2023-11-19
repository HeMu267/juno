import React from 'react'
import externalLink from '../svg/externalLink.svg'
import high from "../svg/high.svg"
import low from "../svg/low.svg"
import medium from "../svg/medium.svg"
export const User = ({user,state}) => {
    const risks=[
        {
            level:"High",
            path:high,
            color:"#7D2424"
        },
        {
            level:"Medium",
            path:medium,
            color:"#88670F"
        },
        {
            level:"Low",
            path:low,
            color:"#006540"
        }
    ]
    const getColor=(color)=>{
        return `text-[${color}]`
    }
  return (
    <div className='grid grid-cols-7 font-font1 grid-row-1 text-contentPrimary text-[12px] border-[1px] border-primaryStroke font-medium bg-white py-[18px] px-[20px]'>
            <div className='col-span-2 flex justify-between'>
                <div className='min-w-[150px]'>
                    <p className='text-contentPrimary text-[14px]  font-medium leading-[18px]'>{user.name}</p>
                    <p className='text-contentSecondary text-[12px]'>{user.email}</p>
                </div>
                <img src={externalLink} className='w-[18px] mr-[40px]'></img>
            </div>
            <div className='flex items-center'>{
                risks.filter((risk)=>{
                    return risk.level===user.riskLevel
                }).map((risk)=>{
                    return(
                        <div className='flex gap-1'>
                            <img src={risk.path}></img>
                            <p className={getColor(risk.color)}>{risk.level}</p>
                        </div>
                    )
                })
            }</div>
            <div className='flex items-center text-contentPrimary font-medium text-[14px] leading-[18px]'>{
                state==="pending"?`${user.triggerReason}`:`${
                    user.actionReason
                }`
            }</div>
            <div className='flex items-center text-contentPrimary font-medium text-[16px] leading-[18px]'>
            {
                state==="pending"?`${user.daysInQueue} days`:`${
                    user.timeToClose
                } days`
            }</div>
            <div className='flex items-center text-contentSecondary font-medium text-[14px] leading-[16px]'>
                {user.dateAdded}
            </div>
            <div className='flex items-center'>
            <div className='flex items-center'>
                {
                    state==="pending"?
                        <div>
                            <p className='text-contentPrimary text-[16px] font-medium leading-[18px]'>{user.previousReview}</p>
                            <p className='text-contentSecondary text-[12px] font-medium'>{user.previousReviewDate}</p>
                        </div>
                    :<div>
                            <p className='text-contentPrimary text-[16px] font-medium leading-[18px]'>{user.actionTakenBy}</p>
                            <p className='text-contentSecondary text-[12px] font-medium'>{user.email2}</p>
                    </div>
                }
            </div>
            </div>
    </div>
  )
}
