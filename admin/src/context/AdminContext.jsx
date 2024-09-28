import { createContext, useState } from "react";
import {toast} from 'react-toastify'
import axios from 'axios'
export const AdminContext = createContext();

const AdminContextProvider = (props) => {
    const [aToken,setAtoken] = useState(localStorage.getItem('aToken')?localStorage.getItem('aToken'):'')
    const[doctors,setDoctors] = useState([])
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const getAllDoctors = async()=>{
        try {
            const {data} = await axios.post(backendUrl + '/api/admin/all-doctors',{},{headers:{aToken}})
            if(data.success){
                setDoctors(data.doctors)
            }else{
                toast.error(error.message)
            }
        } catch (error) {
            toast.error(error.message)
            
        }

    }

    const value = {
        aToken,setAtoken,
        backendUrl,getAllDoctors,
        doctors

    }


    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider