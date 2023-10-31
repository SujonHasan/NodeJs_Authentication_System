import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Navbar = () => {

    const {user, setUser} = useContext(AuthContext)
 
    const navigate = useNavigate();
    // const isLogIn = window.localStorage.getItem('isLogIn');

    console.log("nav user = ", user);
    // console.log('is login = ', isLogIn);

    const handleLogOut = () =>{
        // localStorage.removeItem('user');
        setUser(null);
        navigate('/login');
    }

    const manuItems = <>
        <li><Link to="/" >Home</Link></li>
        {
            user?.id ?
            <>
                <li><Link to="/dashboard" >DashBoard</Link></li>
                <li className='p-2'> {user.firstName} </li>
                <li><button onClick={handleLogOut}  >Sign Out</button></li>
            </>
            :
            <>
                <li><Link to="/login" >Login</Link></li>
                <li><Link to="/signup" >SignUp</Link></li>
            </>
            
        }
        
    </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost btn-circle lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-white">
                    {manuItems}
                </ul>
                </div>
            </div>
            <div className="navbar-center px-10 hidden lg:flex gap-5 text-white list-none">
                {manuItems}
            </div>
        </div>
    );
};

export default Navbar;