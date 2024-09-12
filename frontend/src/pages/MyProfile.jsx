import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {

  const [userData, setUserData] = useState({
    name: "Chowan Kumar",
    image: assets.profile_pic,
    email: 'chowanmalhani@gmail.com',
    phone: '+92 3499435773',
    address: {
      line1: '5th cross north colony',
      line2: 'Mithi Tharparkar Sindh'
    },
    gender: 'Male',
    dob: '2000-01-20'

  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>

      <img className='w-36 rounded' src={userData.image} alt="" />
      {
        isEdit
          ? <input
            className='bg-gray-100 text-3xl font-medium max-w-60 mt-4'
            type="text"
            onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))}
            value={userData.name} />
          : <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
      }
      <hr className='bg-zinc-400 h-[1px] border-none' />

      <div>
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>



          {/* /////email */}
          <p className='font-medium'>Email id:</p>
          <p className='text-blue-500'>{userData.email}</p>


          {/* /////phone */}
          <p className='font-medium'>Phone :</p>
          {
            isEdit
              ? <input
                type="text"
                onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))}
                value={userData.phone}
                className='bg-gray-100 max-w-52' />
              : <p className='text-gray-500'>{userData.phone}</p>
          }

          {/* /////ADDRESS */}

          <p className='font-medium'>Address:</p>

          {
            isEdit
              ? <p>
                <input
                  onChange={(e) => setUserData(prev => ({
                    ...prev, address: { ...prev.address, line1: e.target.value }
                  }))}
                  value={userData.address.line1}
                  type="text"
                  className='bg-gray-100' />
                <br />
                <input
                  type="text"
                  onChange={(e) => setUserData(prev => ({
                    ...prev, address: { ...prev.address, line2: e.target.value }
                  }))}
                  value={userData.address.line2}
                  className='bg-gray-100' />
              </p>
              : <p className='text-gray-500'>
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
          }
        </div>

      </div>

      <div>
        <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Gender :</p>
          {
            isEdit ?
              <select onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender}
                className='max-w-20 bg-gray-100'>
                <option value="Male">Male</option>
                <option value="Female">Female</option>

              </select>
              : <p className='text-gray-500'>{userData.gender} </p>
          }



          {/* Birthday */}
          <p className='font-medium'>BirthDay :</p>
          {
            isEdit ?
              <input type='date' onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))}
                value={userData.dob}
                className='max-w-20 bg-gray-100' />
              : <p className='text-gray-500'>{userData.dob} </p>
          }
        </div>
      </div>

      <div className='mt-10'>
        {
          isEdit
            ? <button
            className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all'
             onClick={() => setIsEdit(false)}>Save Information</button>
            : <button
            className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all'
             onClick={() => setIsEdit(true)}>Edit</button>
        }
      </div>
    </div>
  )
}

export default MyProfile
