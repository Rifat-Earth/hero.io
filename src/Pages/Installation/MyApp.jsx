import React from 'react';

import download from '../../assets/icon-downloads.png'
import ratings from "../../assets/icon-ratings.png"

const MyApp = ({ myApp,handleUninstall }) => {
    const { image, title, downloads, ratingAvg,size,id } = myApp

    

    return (
        <div className="card card-side p-4 bg-base-200 shadow-lg">
            <figure>
                <img className='w-24 h-24 rounded-xl object-cover transition-all hover:scale-105 hover:shadow-2xl '
                    src={image}
                    alt="Movie" />
            </figure>
            <div className="card-body">
                <h1 className='text-xl text-gray-700 font-bold'> {title}</h1>
                <div className='flex gap-5'>
                   <div className='flex justify-center items-center gap-2'>
                    <img className='w-5 h-5 animate-bounce' src={download} alt="download logo" />
                     <h1 className='text-lg  font-bold text-green-500'>{downloads}M</h1>
                   </div>
                  <div className='flex justify-center items-center gap-2'>
                     <img className='w-5' src={ratings} alt="ratings logo" />
                    <h1 className='text-lg font-bold text-amber-500'>{ratingAvg}</h1>
                    <h1 className='text-gray-500 px-6 text-lg '>{size} MB</h1>
                  </div>
                </div>
            </div>
            <button onClick={()=> handleUninstall(id)} className='btn bg-green-400 p-4 text-white rounded-lg'>Uninstall</button>
        </div>
    );
};

export default MyApp;