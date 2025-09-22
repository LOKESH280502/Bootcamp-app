import React, { useContext } from 'react'
import {Link } from "react-router-dom"
import { mycontext } from './GlobalContext'
const Sidebar = () => {
  let {auth}=useContext(mycontext)
  return (
    <>
       <div className="w-50 min-h-screen bg-none text-white p-6 flex flex-col ">
        <Link  className='border- p-3 bg- rounded' to="">All bootcamps</Link><br /> <br />
        {  auth=="publisher"?
        <Link  className='border- rounded  bg-none p-3' to="/dashboard/createBootcamp">Createbootcamps</Link>:""
           } 
            <br /><br />
            {  auth=="publisher"?
        <Link  className='border- w-full  rounded  bg- p-3' to="/dashboard/createBootcamp">UpdateBootcamps</Link>:""
           } 
           <br /><br />
            {  auth=="publisher"?
        <Link  className='border- w-full rounded bg-  p-3' to="/dashboard/createBootcamp">Create Courses</Link>:""
           } 
           <br /><br />
            {  auth=="publisher"?
        <Link  className='border- rounded bg- p-3' to="/dashboard/createBootcamp">Update Course</Link>:""
           } 


       </div>
 
     
    
    </>
  )
}

export default Sidebar
