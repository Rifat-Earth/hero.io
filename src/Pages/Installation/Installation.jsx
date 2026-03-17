import React from 'react';
import Error from '../Error/Error';
import AppError from '../Error/AppError';

const Installation = () => {
    return (
        <div className='hero-font'>
          <div className='flex flex-col justify-center items-center gap-4 py-10 bg-base-200'>
            <h1 className='text-4xl font-bold'>Your Installed Apps</h1>
            <p className='text-gray-500 text-sm'>Explore All Trending Apps on the Market developed by us</p>
          </div>
          <div>
            <h1>(2)App Found</h1>
            <h1></h1>
          </div>
        </div>
    );
};

export default Installation;