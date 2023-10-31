import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user, loadding} = useContext(AuthContext);
    const navigate = useNavigate();

    if(loadding) return <div><span className="loading loading-dots loading-lg"></span></div>

    if(user && user.id) return children;

    return navigator('/login')
};

export default PrivateRoute;