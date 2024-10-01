import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [state, setState] = useState('Sign Up');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const[name,setName] = useState("");
        
  const {backendUrl,token,setToken} = useContext(AppContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      
       if(state === "Sign Up"){
          const {data} = await axios.post(backendUrl + '/api/user/register',{name,email,password});
          if(data.success){
            localStorage.setItem('token',data.token);
            setToken(data.token);
            toast.success("User registered")

            setEmail('');
            setName('');
            setPassword('');

          }else{
            console.log(data)
            toast.error(data.message)
          }
       }else{
        const {data} = await axios.post(backendUrl + '/api/user/login',{email,password});
          if(data.success){
            localStorage.setItem('token',data.token);
            setToken(data.token);
            setEmail('');
            setName('');
            setPassword('');

          }else{
            console.log(data)
            toast.error(data.message)
          }
       }
       

    } catch (error) {
      toast.error(error.message)
      
    }
  }

  return (
    <form onSubmit={onSubmitHandler} action="" className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>

        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? "Create Account" : "Login"}</p>
        <p>Please {state === 'Sign Up' ? "sign up" : 'log in'} to book appointment</p>


        <div className='w-full'>
          <p>Full Name</p>

          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
            className='border border-zinc-300 rounded w-full p-2 mt-1' />

        </div>
       {
        state === 'Sign Up'
        ?  <div className='w-full'>
        <p>Email</p>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          className='border border-zinc-300 rounded w-full p-2 mt-1' />
      </div>
      :<></>

       }
      
        <div className='w-full'>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            className='border border-zinc-300 rounded w-full p-2 mt-1' />
        </div>

        <button type='submit' className='bg-primary text-white w-full py-2 rounded-md text-base'>{state === 'Sign Up' ? "Create Account" : "Login"}</button>

        {
          state === "Sign Up"
          ? <p>Already have an account? <span onClick={()=>setState('Login')} className='text-primary underline cursor-pointer'>Login here</span></p>
          :<p>Create an new account? <span onClick={()=>setState('Sign Up')} className='text-primary underline cursor-pointer'>Click here here</span></p>
        }

      </div>
    </form>
  )
}

export default Login
