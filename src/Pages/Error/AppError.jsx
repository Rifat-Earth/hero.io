import React from 'react';
import error from "../../assets/App-Error.png"
import { NavLink } from 'react-router';

const AppError = () => {
    return (
         <div className='flex justify-center items-center flex-col p-2 py-12 min-h-screen'>
            <div>
                <img src={error} alt="not found" />
            </div>
            <div className='text-center py-5'>
                <h1 className='text-3xl font-bold mb-5'>OPPS!! APP NOT FOUND</h1>
                <h1 className='text-lg font-bold text-gray-500 mb-5'>The App you are requesting is not found on our system.  please try another apps</h1>
                <NavLink to="/" className={({ isActive }) => isActive ? "text-[#632EE3] font-bold underline" : "font-bold"}><button  className='btn text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]'>Back to Home</button> </NavLink>
            </div>
        </div>
    );
};

export default AppError;