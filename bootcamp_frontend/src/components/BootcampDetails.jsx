import React from 'react'
import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { mycontext } from './GlobalContext'
import { useEffect } from 'react'
import { useState } from 'react'
import Threads from '../animations/Threads'


const BootcampDetails = () => {
    let { auth,logtoken } = useContext(mycontext)
    let loc = useLocation()
    let [courses, setcourses] = useState()

    let response = async () => {
        let res = await fetch(`http://localhost:5000/api/v1/bootcamps/${loc?.state?._id}/courses`)
        let dataa = await res.json()
        console.log(dataa);
        setcourses(dataa?.data)
    }
    useEffect(
        () => { response() }, []
    )



    // const handleDelete = async (id) => {
 

//   try {
    // const res = await fetch(`http://localhost:5000/api/v1/courses/${id}`, {
    //   method: "DELETE",
    //   headers: {
    //     "Authorization": `Bearer ${logtoken}`, // if your backend requires auth
    //   },
    // });

//     if (res.ok) {
     
//       // Option 1: refresh course list from backend
//     //   fetchBootcampDetails();
//       // Option 2: remove it from UI directly
    //   setcourses(prev => prev.filter(courses => courses._id !== id));
//     } else {
//       alert("Failed to delete course");
//     }
//   } catch (err) {
//     console.error(err);
//   }
// };




    return (
        <>
            <section className='minh-h-screen border- bg-none'>
                {/* <Threads>  */}
                <div className='border- h-150 pt-5  mt-5 w-1/2 m-auto flex flex-col border-1 items-center justify-cenetr gap-5 bg-none'>
                    {/* let { _id, name, photo,housing,jobAssistance,jobGuarantee, website,email,description } = ele */}
                    <h1 className='font-bold rounded p-2 bg-gray-400'>{loc?.state?.name}</h1>
                    <img className='rounded border-2 h-40 w-50' src={loc?.state?.photo} />
                    <h2 className='font-bold '> WEBSITE  :   {loc?.state?.website}</h2>
                    <h2 className='font-bold'>EMAIL  :  {loc?.state?.email}</h2>
                    <p className='font-bold'> DESCRIPTION  :   {loc?.state?.description}</p>
                    <h2 className='font-bold'> JOB ASSISTANCE  :  {loc?.state?.jobAssistance ? "yes" : "no"}</h2>
                    <h2 className='font-bold'> JOB GAURENTEE  :  {loc?.state?.jobGuarantee ? "yes" : "no"}</h2>
                    <h2 className='font-bold'> HOUSING  :  {loc?.state?.housing ? "yes" : "no"}</h2>
                    {
                        auth == "publisher" ? <Link to="/dashboard/createcourse" className='border-2 rounded bg-gray-800 text-white p-2'>
                            create course
                        </Link> : ""
                    }
                    {
                        auth == "publisher" ? <Link to={`/dashboard/updatebootcamp/${loc?.state?._id}`} className='border-2 rounded bg-orange-800 text-white p-2 '>
                            update
                        </Link> : ""
                    }
                </div>
                {/* </Threads> */}
                <br /><br />
                <h1 className='font-bold rounded  pl-140 bg-'>Avaliable courses</h1>

                <div className='border- w-full h-auto p-4 h-130 flex  flex-wrap bg-'>
                    {
                        courses?.map((ele) => {
                            let { title, description, duration, price, minimumSkill, scholarshipAvailable, bootcamp, image } = ele
                            return <div className='h-auto p-4 w-80 bg-black- border-2 rounded flex flex-col items-center  gap-4 m-auto '>
                                <h2 className='font-bold'>{title}</h2>
                                <img className='rounded h-40 w-50' src={image} alt={title} />
                                <p className='w-70 font-bold text-center'>{description}</p>
                                <h2 className='font-bold'> DURATION : {duration}</h2>
                                <h2 className='font-bold'>PRICE : {price}</h2>
                                <h2 className='font-bold'> SKILL LEVEL : {minimumSkill}</h2>
                                <h2 className='font-bold'>SCHOLARSHIP : {scholarshipAvailable ? "yes" : "no"}</h2>
                                <br />
                                {
                                    auth == "user" ? <button className='border-2 rounded bg-gray-800 text-white p-2'>Enroll now</button> :
                                        ""
                                }
                                {
                                    auth == "publisher" ? <Link
                                        to={`/dashboard/updatecourse/${ele._id}`}
                                        state={ele}
                                        className="border-2 rounded bg-orange-800 text-white p-2"
                                    >
                                        updatecourse
                                    </Link> : ""
                                }
                                {/* <button
                                    onClick={handleDelete(ele._id)}
                                    className="border-2 h-8 w-18 rounded bg-red-700 text-white p-auto"
                                > DELETE</button> */}
                            </div>
                        })
                    }
                </div>

            </section>
        </>
    )
}

export default BootcampDetails
