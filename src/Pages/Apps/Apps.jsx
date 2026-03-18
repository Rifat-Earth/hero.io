import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import App from './App';
import { Search } from 'lucide-react';
import AppError from '../Error/AppError';
import CustomLoader from '../../Components/CustomLoader/CustomLoader';

const Apps = () => {
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(false)
    const appsData = useLoaderData()


    const searchText = search.trim().toLowerCase()

    const searchApps = appsData.filter(app => (
        app.title?.toLowerCase().includes(searchText) ||
        app.companyName?.toLowerCase().includes(searchText) ||
        app.description?.toLowerCase().includes(searchText)
    )
    );

    const handleSearch =(value)=>{
      setLoading(true)
      setTimeout(()=>{
        setSearch(value)
        setLoading(false)
      },400)
    }

    if (!loading && search && searchApps.length === 0)
        return (<><AppError /> </>)

    // console.log(searchApps);

    return (
        <div className='bg-base-200 py-5'>
            <div className='flex justify-center items-center flex-col gap-4 py-5'>
                <h1 className='text-4xl text-center font-bold '>Our All Applications</h1>
                <h1 className='text-xs text-gray-400'>Explore All Apps on the Market developed by us. We code for Millions</h1>
            </div>

            <div className='flex gap-4 flex-col-reverse md:flex-row justify-between items-center p-5'>
                <h1 className='text-2xl font-bold text-gray-700'>({(search ? searchApps : appsData).length}) App Found</h1>
                <div className='flex relative'>
                    <Search size={20} className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' />
                    <input className='p-2 border-1 pl-10 pr-4  outline-[#9F62F2] rounded-lg' type="text" placeholder=' search apps' value={search} onChange={(e) => handleSearch(e.target.value)}

                    />

                </div>

            </div>
            <div className='py-5 grid grid-cols-1 md:grid-cols-4 gap-4'>

                {
                    loading? 
                    <div className='justify-center flex col-span-full items-center'>
                        <CustomLoader/>
                    </div> 
                    :(search ? searchApps : appsData).map(app => <App app={app} key={app.id}></App>)
                }

            </div>

        </div>
    );
};

export default Apps;