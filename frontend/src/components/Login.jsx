import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form" 
import axios from 'axios';
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit, 
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = { email: data.email, password: data.password };

        await axios.post("/user/login", userInfo).then((res) =>{
          console.log(res.data);
          if(res.data) { 
            toast.success('Login successfull!'); 
            document.getElementById("my_modal_3").close();
            
            setTimeout(() => {
              window.location.reload();
            }, 3000); 
          }
          localStorage.setItem("Users", JSON.stringify(res.data.user));  

        }).catch((error) => {
          if(error.response) { 
            console.log(error);
            toast.error("Error: " + error.response.data.message);
            setTimeout(() => {}, 3000);
          }
        });
  }
  
  return (
    <div>
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog"> 
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
             onClick={() => document.getElementById("my_modal_3").close()}>
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Login</h3>
          {/* email */}
          <div className="mt-4 space-y-2 ">
            <span>Email</span>
            <br />
            <input type="email" name="email" placeholder="Enter your email" 
             {...register("email", { required: true })}
             className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white"/>    
             <br />   
             {errors.email && (
              <span className="text-sm text-red-500">This field is required</span>)}
          </div>

          {/* password */}
          <div className="mt-4 space-y-2 ">
            <span>Password</span>
            <br />
            <input type="password" name="password" placeholder="Enter your password" 
             {...register("password", { required: true })}
            className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white"/>       
            <br />
              {errors.password && (<span className="text-sm text-red-500">This field is required</span>)}
          </div>

          {/* Button */}
          <div className="mt-6 mb-2 ">
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Login</button>
          </div>
           <p>Not Registered? <Link to="/signup" className="text-blue-500 underline cursor-pointer">
            SignUp</Link></p>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
