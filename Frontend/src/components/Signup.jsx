import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Login from './Login';
import axios from 'axios';
import toast from 'react-hot-toast';
function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const location=useLocation();
  const navigate=useNavigate();
  const from=location.state?.from?.pathname||"/"

  const onSubmit =  async (data) => {
    const userInfo={
      fullname:data.fullname,
      email:data.email,
      password:data.password
    }
    //call api via axios
    await axios.post('http://localhost:4001/user/signup', userInfo)
    .then(response => {
      console.log(response.data);
      if(response.data){
        toast.success("signup successfull, You can logged in now");
        navigate(from,{replace:true})
      }
      localStorage.setItem("Users",JSON.stringify(response.data.user));
      })
      .catch(error => {
        console.log(error);
        toast.error("Error: " + error.response.data.message);
        });
  }

  return (
    <>
      <div className='flex h-screen items-center justify-center'>
        <div className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method='dialog'>
              {/* if there is a button in form, it will close the modal */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
              <h3 className="font-bold text-lg">Signup</h3>
              <div className='mt-4 space-y-2'>
                <span>Name</span>
                <br></br>
                <input type="text" name="fullname" placeholder="Enter your full name" className="input w-80 px-30 rounded:md outline-none"
                  {...register("fullname", { required: true })} />
                <br></br>
                {errors.fullname && (<span className="text-sm text-red-500">This field is required</span>)}
              </div>
              <div className='mt-4 space-y-2'>
                <span>Email</span>
                <br></br>
                <input type="email" name="email" placeholder="Enter your email" className="input w-80 px-30 rounded:md outline-none"
                  {...register("email", { required: true })} />
                <br></br>
                {errors.email && (<span className="text-sm text-red-500">This field is required</span>)}
              </div>
              <div className='mt-4 space-y-2'>
                <span>Password</span>
                <br></br>
                <input type="password" name="password" placeholder="Enter your password" className="input w-80 px-30 rounded:md outline-none"
                  {...register("password", { required: true })} />
                <br></br>
                {errors.password && (<span className="text-sm text-red-500">This field is required</span>)}
              </div>
              <div className='flex justify-between mt-4'>
                <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-2 hover:bg-pink-700 duration-200'>Signup</button>
                <p className='text-xl'>
                  Have Account?{" "} <button to="/" className='underline text-blue-500 cursor-pointer'
                    onClick={() => document.getElementById("my_modal_3").showModal()}
                  >Login</button>{" "}
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup;