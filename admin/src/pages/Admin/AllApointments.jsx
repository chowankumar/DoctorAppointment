import React, { useContext,useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const AllApointments = () => {
  const { aToken, appointments, getAllappointments } = useContext(AdminContext);
    
  useEffect(() => { 
    if(aToken){
      getAllappointments();   
    }
  },[aToken])
  return (
    <div className='w-full max-w-6xl m-5'>

    <div className='mb-3 text-lg font-medium'>All Appointments</div>

    <div className='bg-white border rounded text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll'>
      <div className='hidden sm:grid gri-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b'>
        <div>#</div>
        <div>Patient</div>
        <div>Age</div>
        <div>Date & Time</div>
        <div>Doctor</div>
        <div>Fees</div>
        <div>Actions</div>

      </div>
  
      {appointments.map((item,index)=>(
        <div key={index}>
          <p>{index + 1}</p>
          <div>
            <img src={item.userData.image} alt="" />
          </div>

        </div>
      ))}


    </div>


    </div>
  )
}

export default AllApointments