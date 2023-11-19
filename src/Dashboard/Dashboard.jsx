import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'

export const Dashboard = () => {
  return (
    <div className='relative flex w-screen min-h-screen'>
        <Sidebar/>
        <div className='w-full flex relative overflow-y-auto overflow-x-hidden'>
          <div className='max-w-[1200px] mx-auto'>
            <Outlet/>
          </div>
        </div>
    </div>
  )
}
