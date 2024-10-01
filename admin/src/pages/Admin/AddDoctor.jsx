import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { AdminContext } from './../../context/AdminContext'
import {toast} from 'react-toastify'
import axios from 'axios'
const AddDoctor = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [image, setImage] = useState(false)
  const [speciality, setSpeciality] = useState('Gerennal Physician')
  const [experience, setExperience] = useState('1 Year')
  const [fees, setFees] = useState('');
  const [education, setEducation] = useState('');
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')
  const [about,setAbout] = useState('');

  const { backendUrl, aToken } = useContext(AdminContext);

  const onSubmitHander = async (event) => {
    event.preventDefault()
    
    try {

      if(!image){
        toast.error('select the image')
      }

      const formData = new FormData();

      formData.append('name',name)
      formData.append('email',email)
      formData.append('password',password)
      formData.append('image',image)
      formData.append('speciality',speciality)
      formData.append('degree',education)
      formData.append('experiece',experience)
      formData.append('about',about)
      formData.append('fees',fees)
      formData.append('address',JSON.stringify({line1:address1,line2:address2}))

    
    
      const {data} = await axios.post(backendUrl + '/api/admin/add-doctor',formData,{headers:{aToken}})

      if(data.success){
        toast.success(data.message)
        setImage('');
        setName('')
        setEmail('')
        setPassword('')
        setAddress1('')
        setAddress2('')
        setEducation('')
        setAbout(''),
        setFees('')
      }else{
        toast.error(data.message)

      }
      
    } catch (error) {
      toast.error(error.message)
      console.log(error)
      
    }



  }

  return (
    <form onSubmit={onSubmitHander} action="" className='m-5 w-full'>

      <p className='mb-3 text-lg font-medium'>Add Doctor</p>

      <div className='bg-white px-8 py-8 border rounded w-full  max-w-4xl max-h-[80vh] overflow-scroll '>

        <div className='flex items-center gap-4 mb-8 text-gray-500'>
          <label htmlFor="doc-img">

            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
              className='w-16 bg-gray-100 rounded-full cursor-pointer' />
          </label>

          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id='doc-img'
            hidden />
          <p>Upload Doctor <br /> picture</p>
        </div>


        <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-600'>

          <div className='w-full lg:flex-1 flex flex-col gap-4'>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Doctor Name</p>

              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className='border rounded px-3 py-2'
                type="text"
                placeholder='Name'
                required
              />
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Doctor Email</p>

              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email" placeholder='Email'
                required
                className='border rounded px-3 py-2' />

            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Doctor Password</p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder='Password'
                required
                className='border rounded px-3 py-2' />
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Experience</p>
              <select onChange={(e) => setExperience(e.target.value)} value={experience} className='border rounded px-3 py-2'>
                <option value="1 Year">
                  1 Year
                </option>
                <option value="2 Year">
                  2 Year
                </option>
                <option value="3 Year">
                  3 Year
                </option>
                <option value="4 Year">
                  4 Year
                </option>
                <option value="5 Year">
                  5 Year
                </option>
                <option value="6 Year">
                  6 Year
                </option>
                <option value="7 Year">
                  7 Year
                </option>

              </select>

            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Fees</p>
              <input
                onChange={(e) => setFees(e.target.value)}
                value={fees}
                type="number"
                placeholder='fees'
                required
                className='border rounded px-3 py-2' />
            </div>

          </div>

          <div className='w-full lg:flex-1 flex flex-col gap-4'>
            <div className='flex-1 flex flex-col gap-1'>
              <p>Speciality</p>
              <select onChange={(e) => setSpeciality(e.target.value)} value={speciality} className='border rounded px-3 py-2'>
                <option value="Gerennal physician">Gerennal Physician</option>

                <option value="Gynecologist">Gynecologist</option>

                <option value="Dermatologist">Dermatologist</option>

                <option value="Pediatricians">Pediatricians</option>

                <option value="Neurologist">Neurologist</option>

                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Education</p>
              <input
                onChange={(e) => setEducation(e.target.value)}
                value={education}
                type="text"
                placeholder='Education'
                required
                className='border rounded px-3 py-2' />
            </div>

            <div>

              <p>Address</p>

              <input
                onChange={(e) => setAddress1(e.target.value)}
                value={address1}
                type="text"
                placeholder='address 1'
                required
                className='border rounded px-3 py-2' />

              <input
                onChange={(e) => setAddress2(e.target.value)}
                value={address2}
                type="text"
                placeholder='address 2'
                required
                className='border rounded px-3 py-2' />
            </div>

          </div>
        </div>

        <div>
          <p className='mt-4 mb-2'>About Doctor</p>
          <textarea
            onChange={(e) => setAbout(e.target.value)}
            value={about}
            className='w-full px-4 pt-2 border rounded'
            placeholder='write about doctor'
            rows={5}
            required>

          </textarea>
        </div>

        <button type='submit' className='bg-primary px-10 py-3 mt-4 text-white rounded-full'>Add Doctor</button>
      </div>
    </form>

  )
}

export default AddDoctor