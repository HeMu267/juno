import React from 'react'
import cross from "../svg/cross.svg"
import search from "../svg/search.svg"
import chevron from "../svg/chevron.svg"
import { useState } from 'react';
import { Dropdown } from './Dropdown';
import { RiskDropdown } from './RiskDropdown';
import { UserModal } from './UserModal';
import { TriggerReasons } from '../Data/TriggerReasons';
import { ActionReasons } from '../Data/ActionReasons';
export const Monitoring = ({setCloseAcc}) => {
    const [state,setState]=useState("pending");
    const [filter,setFilter]=useState("All");
    const handleFilter=(e)=>{
        setFilter(e.target.value)
    }
    const [dropdown,setDropdown]=useState(false);
    const [riskfilter,setRiskFilter]=useState("All");
    const [riskDropdown,setRiskDropdown]=useState(false);
    const [searchFilter,setSearchFilter]=useState("");
    const handleRiskFilter=(e)=>{
        setRiskFilter(e.target.value)
    }
    const handleSearch=(e)=>{
        setSearchFilter(e.target.value)
    }
    const handleState=(e)=>{
        if(e.target.name=="pending")
        {
            setState("pending");
        }
        else{
            setState("completed");
        }
        setFilter("All");
        setRiskFilter("All");
        setDropdown(false);
        setRiskDropdown(false);
    }
  return (
    <div className='h-screen min-[1440px]:w-[1200px] w-full gap-4 flex flex-col relative p-[48px]'>
        <h1 className='font-font1 text-[32px] text-contentPrimary '>Monitoring</h1> {/*heading*/}
        {
            /* state change section*/
        }
        <div className='w-full flex items-center justify-between rounded-b-sm border-b-2 border-contentTertiary'>
            <div className='flex gap-6 text-[14px] font-medium leading-[18px] font-font1'>
                <button onClick={handleState} name='pending' className={`${state=="pending"?"text-baseBrand border-b-2 border-baseBrand":"text-contentTertiary border-b-2 border-contentTertiary"} mb-[-2px] rounded-b-sm p-5 `}>
                    Pending
                </button>
                <button onClick={handleState} name='completed' className={`${state=="completed"?"text-baseBrand border-b-2 border-baseBrand":"text-contentTertiary border-b-2 border-contentTertiary"} mb-[-2px] rounded-b-sm p-5 `}>
                    Completed
                </button>
            </div>
            <button onClick={()=>{setCloseAcc(true)}} className='rounded-md p-[8px] gap-[6px] flex justify-center items-center bg-bgError text-baseError'>
                <img src={cross}></img>
                Close Account
            </button>
        </div>
        <div className='flex relative gap-4'>
        {
            /* searching and filtering section*/
        }
            <div className='flex rounded-md gap-3 justify-center items-center border-primaryStroke border-[1px] border-solid py-[8px] px-[16px]'>
                <img src={search}>

                </img>
                <input className='outline-0 w-[350px]' onChange={handleSearch} type='text' id='search' placeholder='Search'>
                
                </input>
            </div>
            {
                <div onClick={()=>{setDropdown(!dropdown); setRiskDropdown(false)}} className='p-[8px] relative flex justify-center items-center gap-4 bg-bgRaised rounded-md  text-contentSecondary'>
                    <div className='font-font1 font-medium'>{
                        state=="pending"?"Trigger Reasons":"Action Reasons"
                    }</div>
                    <img src={chevron} className={`${dropdown==true?"rotate-180":""}`}></img>
                    {
                        dropdown &&
                        <Dropdown state={state} TriggerReasons={TriggerReasons} ActionReasons={ActionReasons} handleFilter={handleFilter} filter={filter}/>
                    }  
                </div>
            }
            <div onClick={()=>{setRiskDropdown(!riskDropdown) ;setDropdown(false)}} className='p-[8px] relative flex justify-center items-center gap-4 bg-bgRaised rounded-md  text-contentSecondary'>
                <div className='font-font1 font-medium'>Risk level</div>
                <img src={chevron} className={`${riskDropdown==true?"rotate-180":""}`}></img>
                {
                    riskDropdown && 
                    <RiskDropdown riskfilter={riskfilter} handleRiskFilter={handleRiskFilter}/>
                }
            </div>
        </div>
        <UserModal state={state} searchFilter={searchFilter} filter={filter} riskfilter={riskfilter}/>
    </div>
  )
}
