import React from 'react';
import loader from "../../assets/logo.png"

const CustomLoader = () => {
    return (
        <div className="flex flex-row justify-center items-center min-h-screen">
            <div className='flex items-center gap-4'>
                <img className='animate-spin w-12 h-12' src={loader} alt="loader image" />
            <p className="text-2xl  font-semibold text-[#632EE3]">
                Please Wait...
            </p>
            </div>
        </div>
    );
};

export default CustomLoader;