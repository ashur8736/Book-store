import React, { useState } from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

const Logout = () => {
const [authuser,setAuthUser]=useAuth()
 const handleLogout=()=>{
    try{
        setAuthUser({
            ...authuser,
            user: null
        })
        localStorage.removeItem("Users");
        toast.success("Logged out successfully");
        setTimeout(() => {
            window.location.reload(); 
        }, 2000);
    }catch(error){
    toast.error("Error"+ error.message)
    setTimeout(() => {  }, 2000);}

 }
  return (
    <div>
        <button onClick={handleLogout} className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'>Logout</button>
    </div>
  )
}

export default Logout