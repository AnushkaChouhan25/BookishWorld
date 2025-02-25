import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form" 

function Signup() {
     const {
        register,
        handleSubmit, 
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => console.log(data)
      
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </Link>
            <h3 className="font-bold text-lg">Signup</h3>
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                name="text"
                id="textid"
                placeholder="Enter your FullName"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("name", { required: true })}
              />
               <br />   
             {errors.name && (
              <span className="text-sm text-red-500">This field is required</span>)}
            </div>
            {/* email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                name="email"
                id="emailid"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
               <br />   
             {errors.email && (
              <span className="text-sm text-red-500">This field is required</span>)}
            </div>
            {/* password */}
            <div className="mt-4 space-y-2 ">
              <span>Password</span>
              <br />
              <input
                type="password"
                name="password"
                id="passwordid"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
               <br />   
             {errors.password && (
              <span className="text-sm text-red-500">This field is required</span>)}
            </div>
            {/* Button */}
            <div className="flex justify-around mt-6 mb-2 ">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                SignUp
              </button>
            <p className="text-xl">
            Already Registered?{" "}
              <button 
                className="text-blue-500 underline cursor-pointer"
                onClick={()=>document.getElementById("my_modal_3").showModal()}
                >
                Login
              </button>
              <Login/>
            </p>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
