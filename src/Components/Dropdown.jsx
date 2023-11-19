    import React from 'react'

    export const Dropdown = ({filter,handleFilter,TriggerReasons,ActionReasons,state}) => {

    return (
        <div className='absolute z-100 bottom-0 translate-y-[105%] border-[0.25px] border-primaryStroke rounded-md  bg-white w-56 flex justify-center p-[12px] flex-col gap-2 shadow-lg'>
        {   
            state=="pending"?
                TriggerReasons.map((trigger)=>{
                    return(
                        <button onClick={handleFilter} value={trigger} className={` ${trigger===filter?"bg-blueLight text-contentPrimary":" text-contentSecondary"} flex p-[6px] rounded-md text-[12px] font-medium`}>
                        {
                            trigger
                        }
                        </button>
                    )
                })
            :
            ActionReasons.map((action)=>{
                return(
                    <button onClick={handleFilter} value={action} className={` ${action===filter?"bg-blueLight text-contentPrimary":" text-contentSecondary"} flex p-[6px] rounded-md text-[12px] font-medium`}>
                    {
                        action
                    }
                    </button>
                )
            })
        }
        </div>
    )
    }
