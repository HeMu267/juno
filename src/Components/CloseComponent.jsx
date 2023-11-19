import React from 'react'
import { useState } from 'react'
import blackCross from "../svg/blackCross.svg"
export const CloseComponent = ({setCloseAcc}) => {
    const [formData,setFormData]=useState(
        {
            email:"",
            UARoption:"",
            reason:"",
            note:"",
            chargeClosureFee:""
        }
    )
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value,
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("data retrieved")
    }
    const [isChecked, setIsChecked] = useState(false);

    const handleRadioClick = () => {
        setIsChecked(!isChecked);
    };
  return (
    <form onSubmit={handleSubmit}>
        <div className='flex flex-col border-[1px] border-primaryStroke shadow-md p-[20px] gap-8 rounded-md bg-white'>
            <div className='w-full flex justify-between'>
                <h2 className='text-contentPrimary text-[24px] font-medium leading-[18px] '>Close Account</h2>
                <img src={blackCross} onClick={()=>{setCloseAcc(false)}}></img>
            </div>
            <div className='flex gap-1 flex-col'>
                <p className='text-contentSecondary text-[14px] font-normal'>Email</p>
                <input className='border-[1px] w-[434px] h-[36px] border-primaryStroke outline-none p-2'
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                />
            </div>
            <div className='flex items-center gap-4'>
                <p className='text-contentPrimary font-normal text-[14px]'>Want to file UAR</p>
                <div className='flex gap-2 items-center'>
                    <input type="radio" id='Yes' value="Yes" checked={formData.UARoption==="Yes"} onChange={handleChange} name="UARoption"></input>
                    <label for='Yes'>Yes</label>
                </div>
                <div className='flex gap-2 items-center'>
                    <input type="radio" id='No' value="No" checked={formData.UARoption==="No"} onChange={handleChange} name="UARoption"></input>
                    <label for='No'>No</label>
                </div>
            </div>
            <div className='flex gap-1 flex-col'>
                <p className='text-contentSecondary text-[14px] font-normal'>Reason</p>
                <input className='border-[1px] w-[434px] h-[36px] border-primaryStroke outline-none p-2'
                type="text"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                required
                />
            </div>
            <div className='flex gap-1 flex-col'>
                <p className='text-contentSecondary text-[14px] font-normal'>Note</p>
                <textarea className='border-[1px] w-[434px] h-[100px] border-primaryStroke outline-none p-2'
                type="textarea"
                name="note"
                value={formData.note}
                onChange={handleChange}
                required
                />
            </div>
            <div className='flex justify-between items-center gap-2'>
                <div className='gap-2 flex items-center'>
                    <input className='' type='radio' id="chargeClosureFee" 
                    checked={isChecked}
                    value="Yes"
                    onChange={handleChange}
                    onClick={handleRadioClick}
                    name='chargeClosureFee'></input>
                    <label for='chargeClosureFee'>Charge Closure Fee</label>

                </div>
                <button className='p-[16px] rounded-md bg-baseBrand text-white'>
                    Close Account
                </button>
            </div>
        </div>
    </form>
  )
}
