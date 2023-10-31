import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/UserContext';

const Home = () => {

    const [count, setCount] = useState(0);

    return (
        <div className="min-h-screen flex gap-5 items-center justify-center bg-gray-100" >
            <div class='px-5'>
                <h1>This is Home page </h1>
            </div>
            <div>
                <button class='btn' type='button' onClick={()=>{setCount(preCount => preCount + 1)}} >ADD</button>
                <h1 class='text-6xl'>{count}</h1>
                <button class='btn' type='button' onClick={()=>{setCount(preCount => preCount - 1)}} >SUB</button>
            </div>
        </div>
    );
};

export default Home;