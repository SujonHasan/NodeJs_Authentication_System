import React, { useContext, useEffect } from "react";
import {useForm} from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/UserContext";

function Login() {

  const {user, setUser, setLoadding} = useContext(AuthContext);

  const navigate = useNavigate();

  const { register, formState: { errors }, handleSubmit } = useForm();

  const handleLogin = (data) => {
    // data.preventDefault();
    // Implement your login logic here
    console.log("Login Data = ", data);

    fetch('http://localhost:5000/login',{
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
    }).then(res => res.json())
    .then( d => {
      console.log("login data................. = ", d);
      if(d.token){
        localStorage.setItem('access_token', d.token);
        // localStorage.setItem('user', d.user);
      }
      setUser(d.user);
      setLoadding(false);
      toast.success("Login Successfull");
      navigate("/dashboard");
    })
    .catch(err => {
      console.log("login error = ", err.message);
      toast.error(`${err.message}`);
    })
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md bg-white rounded-lg shadow-xl p-6 space-y-6">
        <h2 className="text-3xl font-extrabold text-center text-gray-800">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit(handleLogin)}>
          <div>
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input type='email' {...register('email', { required: 'Email must be required', maxLength: { value: 30, message: 'Lessthen 30 character' } })} className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-600' >{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input type='password' {...register('password', {
                            required: "Password must be required",
                            minLength: { value: 6, message: "must be 6 character", },
                            pattern: { value: /(?=.*[A-Z])(?=.*[0-9])(?=.*[!@$&*])/, message: "Password must be Upper Character Number and special character" },
                        })} className="input input-bordered w-full " />
                        {errors.password && <p className='text-red-600' >{errors.password.message}</p>}
          </div>
          <div>
            <input className="input input-bordered w-full btn-accent " type="submit" value="Sign Up" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;