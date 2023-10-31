import React, { useState } from "react";
import {useForm} from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your signup logic here
//     console.log("Name: ", name);
//     console.log("Email: ", email);
//     console.log("Password: ", password);
//   };
const {error, setError} = useState(); 
const { register, formState: { errors }, handleSubmit } = useForm();

const navigate = useNavigate();

const handleSignUp = (data) =>{
    // data.preventDefault();
    console.log("data = " , data);

    fetch('http://localhost:5000/registor', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
    .then(data => {
      console.log("data ------ ", data);
      toast.success("SignUp successfull");
      navigate('/login');
    })
    .catch(err =>{
      console.log("err= ======= ", err.message);
      // setError('err.message');
      toast.error(`${err.message}`);
    })
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-lg p-4 space-y-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-3xl font-extrabold text-center text-gray-800">SignUp</h2>
        <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
          <div>
            <label htmlFor="First Name" className="block text-gray-600">
              First Name
            </label>
            <input type='text' {...register('firstName', { required: 'First Name is required', minLength: { value: 2, message: "must be 2 character", }, })} className="input input-bordered w-full" />
                        {errors.firstName && <p className='text-red-600' >{errors.firstName.message}</p>}
          </div>
          <div>
            <label htmlFor="Last Name" className="block text-gray-600">
              Last Name
            </label>
            <input type='text' {...register('lastName', { required: 'Name is required', minLength: { value: 2, message: "must be 2 character", }, })} className="input input-bordered w-full" />
                        {errors.lastName && <p className='text-red-600' >{errors.lastName.message}</p>}
          </div>
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
            <label htmlFor="confirm password" className="block text-gray-600">
              Confirm  Password
            </label>
            <input type='password' {...register('confirmPassword', {
                            required: "Confirm Password must be required",
                            minLength: { value: 6, message: "must be 6 character", },
                            pattern: { value: /(?=.*[A-Z])(?=.*[0-9])(?=.*[!@$&*])/, message: "Password must be Upper Character Number and special character" },
                        })} className="input input-bordered w-full " />
                        {errors.confirmPassword && <p className='text-red-600' >{errors.confirmPassword.message}</p>}
          </div>
          <div>
          <input className="input input-bordered w-full btn-accent " type="submit" value="Sign Up" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;