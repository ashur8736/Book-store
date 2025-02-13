import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit =  async (data) => {
    const userInfo={
      fullname:data.fullname,
      email:data.email,
      password:data.password
    }
    //call api via axios
    await axios.post('http://localhost:4001/user/login', userInfo)
    .then(response => {
      console.log(response.data);
      if(response.data){
        toast.success("LoggedIn Succesfully");
        document.getElementById("my_modal_3").close;
        setTimeout(() => {
        window.location.reload();
        localStorage.setItem("Users",JSON.stringify(response.data.user));
        }, 500);
      }
      })
      .catch(error => {
        console.error(error);
        toast.error("Error: " + error.response.data.message);
        setTimeout(() => {}, 500);
        });
  }


  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="post">
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br></br>
              <input
                type="email"
                placeholder="Enter your email"
                className="input w-80 px-3 py-1 border rounded:md outline-none"
                {...register("email", { required: true })}
              />
              <br></br>
              {errors.email && (<span className="text-sm text-red-500">This field is required</span>)}
            </div>
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br></br>
              <input
                type="password"
                placeholder="Enter your password"
                className="input w-80 px-30 px-3 py-1 border rounded:md outline-none"
                {...register("password", { required: true })}
              />
              <br></br>
              {errors.password && (<span className="text-sm text-red-500">This field is required</span>)}
            </div>
            <div className="flex justify-between mt-4">
              <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-2 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;  