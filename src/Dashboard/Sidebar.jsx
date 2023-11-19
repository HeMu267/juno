import React from 'react'
import Logo from '../Images/57402a5b816f67732f59a121ef0ef24f.png'
import PersonImg from "../Images/Image.svg"
import { sidebarLinks } from '../Data/dashboardLinks'
import { SidebarLinks } from './SidebarLinks'
export const Sidebar = () => {
  return (
    <div className='w-[258px] border-r-[1px] border-solid border-primaryStroke h-screen pt-[48px] pl-[32px] pr-[32px] pb-[32px]'>
        <div className='flex flex-col h-full justify-between'>
            <div className='flex gap-[5rem] flex-col'>
                <img src={Logo}></img>
                <div className='flex flex-col'>
                  {
                    sidebarLinks.map((links)=>{
                      return(
                        <SidebarLinks name={links.name} path={links.path}/>
                      )
                    })
                  }
                </div>
                
            </div>
            <div className='flex gap-2 relative'>
                <img src={PersonImg}></img>
                <div className='flex text-[14px] font-medium font-font1 leading-[18px]  flex-col'>
                  <p className=' text-contentPrimary font-medium font-font1 leading-[18px]'>Elon Musk</p>
                  <p className='text-contentSecondary'>
                    elon@twitter.com
                  </p>
                </div>
            </div>
        </div>
    </div>
  )
}
