import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const DashBoard = () => {

    // const [user, setUser] = useState(localStorage.getItem('user'));
    const {user, setUser} = useContext(AuthContext);
    // const [user, setUser] = useState('');
    const navigate = useNavigate();

    useEffect(() =>{

        fetch("http://localhost:5000/user",{
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            // console.log("data............. = ", data);
            setUser(data);
            // localStorage.setItem('user', data);
            localStorage.setItem('isLogIn', true);
            setUser(data);
            console.log("dashboard user............ = ", user);
        })
        .catch(err =>{
            console.log("error.................. = ", err.message);
            window.localStorage.setItem('isLogIn', false);
            localStorage.setItem('user', null);
            navigate('/login');
        })
    })

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="max-w-md p-4 space-y-6 bg-white rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold text-center">User Profile</h2>
            {user?.id ? (
              <div className="space-y-4">
                <div>
                  <div className="text-lg font-semibold text-gray-800">{user.firstName + " " + user.lastName}</div>
                  <div className="text-gray-800">{user.email}</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Additional Information</h3>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptates tempore omnis exercitationem porro magnam! Ipsum sed autem asperiores animi.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Address</h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex voluptatum incidunt quidem quo nisi nihil dolorum eius possimus fuga nam. Provident eius incidunt minus, ullam quam aliquam ad iusto qui?
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800"> {"Created at " + user.created_at} </h3>
                  <h3 className="text-xl font-semibold text-gray-800">{"updated_at " + user.updated_at}</h3>
                </div>
              </div>
            ) : (
              <p className="text-gray-600 text-center">Loading user data...</p>
            )}
          </div>
        </div>
      );
};

export default DashBoard;