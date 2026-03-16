import React from 'react';
import { useLoaderData } from 'react-router';
import App from './App';
import { Search } from 'lucide-react';

const Apps = () => {
    const appsData = useLoaderData()
   
    return (
        <div className='bg-base-200 py-5'>
            <div className='flex justify-center items-center flex-col gap-4 py-5'>
                <h1 className='text-4xl text-center font-bold '>Our All Applications</h1>
                <h1 className='text-xs text-gray-400'>Explore All Apps on the Market developed by us. We code for Millions</h1>
            </div>

            <div className='flex justify-between items-center p-5'>
                <h1 className='text-2xl font-bold text-gray-700'>({appsData.length}) App Found</h1>
                <div className='flex relative'>
                     <Search size={20} className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'  />
                    <input className='p-2 border-1 pl-10 pr-4  outline-[#9F62F2] rounded-lg' type="text"  placeholder=' search' />
                   
                </div>
               
            </div>
            <div className='py-5 grid grid-cols-1 md:grid-cols-4 gap-4'>

                {
                  appsData.map(app=> <App app={app} key={app.id}></App>)
                }

            </div>
        </div>
    );
};

export default Apps;