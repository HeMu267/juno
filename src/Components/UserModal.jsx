import React, { useState } from 'react'
import { User } from './User'
import { MonitoringData } from '../Data/MonitoringData'
import chevronUpdown from "../svg/chevronUpdown.svg"
export const UserModal = ({state,filter,riskfilter,searchFilter}) => {
    const [riskSort,setRiskSort]=useState(false);
    const [timeSort,setTimeSort]=useState(false);
    const sortingOrder={Low:1,Medium:2,High:3}
  return (
    <div className='w-full flex rounded-md flex-col'>
        <div className='grid grid-cols-7 gap-4 grid-row-1 rounded-md text-contentPrimary text-[12px] font-medium bg-bgRaised py-[18px] px-[20px]'>
            <div className='col-span-2'>User</div>
            <div className='flex gap-1'>
                Risk level
                <img src={chevronUpdown} className={`${riskSort?"rotate-180":""}`} onClick={()=>{setRiskSort(!riskSort);setTimeSort(false)}}></img>
            </div>
            <div className=''>
                {
                    state==="pending"?"Trigger reason":"Action Reason"
                }
            </div>
            <div className=''>
                {
                    state==="pending"?
                    <div className='flex  gap-1'>
                        In queue for
                        <img src={chevronUpdown} className={`${timeSort?"rotate-180":""}`} onClick={()=>{setTimeSort(!timeSort);setRiskSort(false)}}></img>
                    </div>
                    :
                    <div className='flex gap-1'>
                        Time to close
                        <img src={chevronUpdown} className={`${timeSort?"rotate-180":""}`} onClick={()=>{setTimeSort(!timeSort);setRiskSort(false)}}></img>
                    </div>
                }
            </div>
            <div className=''>
                Date added on
            </div>
            <div className=''>
                {
                    state==="pending"?"Previously reviewed":"Action taken by"
                }
            </div>
        </div>
        {
            MonitoringData.filter((user)=>{
                return user.state==state;
            }).filter((user)=>{
                if(state=="pending")
                {
                    if(filter=="All")
                    {
                        return user
                    }
                    else{
                        return user.triggerReason==filter
                    }
                }else{
                    if(filter=="All")
                    {
                        return user
                    }
                    else{
                        return user.actionReason==filter
                    }
                }
            }).filter((user)=>{
                if(riskfilter=="All")
                {
                    return user
                }
                else{
                    return user.riskLevel==riskfilter
                }
            }).filter((user)=>{
                if(searchFilter=="")
                {
                    return user
                }else{
                    return user.name.toLowerCase().includes(searchFilter.toLowerCase());
                }
            }).sort((a,b)=>{
                if(riskSort)
                {
                    return sortingOrder[a.riskLevel]-sortingOrder[b.riskLevel];
                }
            }).sort((a,b)=>{
                if(timeSort && state=="pending")
                {
                    return a.daysInQueue-b.daysInQueue;
                }
                else if(timeSort && state=="completed"){
                    return a.timeToClose-b.timeToClose;
                }
            }).map((user)=>{
                return(
                    <User user={user} state={state}/>
                )
            })
        }
    </div>
  )
}
