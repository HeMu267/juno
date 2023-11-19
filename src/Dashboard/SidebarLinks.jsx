import React from 'react'
import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import { matchPath } from 'react-router-dom';
export const SidebarLinks = ({name,path}) => {
    const location=useLocation();
    const matchRoute=(route)=>{
        return matchPath({path:route},location.pathname)
    }
  return (
        <NavLink className={`${matchRoute(path)?"text-baseBrand bg-baseBrand bg-opacity-10":"text-contentSecondary bg-white"} rounded-md font-font1 font-medium text-[16px] p-[10px]`} to={path}>
        {name}
        </NavLink>
  )
}
