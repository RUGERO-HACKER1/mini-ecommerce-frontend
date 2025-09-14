//import { useState } from "react";
//import { useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form";
import axios from "axios";


    interface Formdata{
    username: string;
    email: string;
    password: string;
}  
const RegistrationForm = () => {

     const {register , handleSubmit} = useForm <Formdata>();

     const onSubmit = async(data:Formdata)=>{
    try {
        const {username , email , password}=data;
        const formdata =new FormData();
        formdata.append("username", username);
        formdata.append("email", email);
        formdata.append("password", password);

       const res= await axios.post('http://localhost:4000/api/auth/register' , formdata,
            {
                headers: {
                    "Content-Type":"application/json"
                },
                
            }
        )

         console.log(res);

    }catch (error) {
        console.log("registration failed", error);
    
    }
}



 return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-10 space-y-6">
      {/* Full Name */}
      <input
        type="text"
        placeholder="John Doe"
        {...register("username", { required: true, minLength: 3 })}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />

      {/* Email */}
      <input
        type="email"
        placeholder="you@example.com"
        {...register("email", { required: true })}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />

      {/* Password */}
      <input
        type="password"
        placeholder="••••••••"
        {...register("password", { required: true, minLength: 6 })}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-yellow-400 text-white py-2 rounded-lg hover:bg-yellow-500 transition"
      >
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
