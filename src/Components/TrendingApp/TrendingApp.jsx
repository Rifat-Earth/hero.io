import React from 'react';
import AppCard from '../AppCard/AppCard';
import { NavLink } from 'react-router';

const TrendingApp = ({appsData}) => {
      
    return (
        <div>
            <div className='flex justify-center items-center flex-col gap-4 py-5'>
                <h1 className='text-4xl text-center font-bold '>Trending Apps</h1>
                <h1 className='text-xs text-gray-400'>Explore All Trending Apps on the Market developed by us</h1>
            </div>
            <div className=' py-5 grid grid-cols-1 md:grid-cols-4 gap-4'>
                {
                    appsData.map(appCard => <AppCard appCard={appCard} key={appCard.id}></AppCard>)
                }
            </div>
             <div className='text-center'>
                <NavLink to="/apps" className={({ isActive }) => isActive ? "text-[#632EE3] font-bold underline" : "font-bold"}><button  className='btn text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]'>Show All</button> </NavLink>
               
             </div>
        </div>
    );
};

export default TrendingApp;