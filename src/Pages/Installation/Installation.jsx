import React, { useEffect, useState } from 'react';
import Error from '../Error/Error';
import AppError from '../Error/AppError';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { useLoaderData } from 'react-router';
import { toGetData } from '../../Components/Utility/addToLocal';
import MyApp from './MyApp';

const Installation = () => {

    const [appList, setAppList] = useState([]);

    const appData = useLoaderData()
    // console.log(appData);

    useEffect(() => {
        const storeApp = toGetData()
        const myAppList = appData.filter(app => storeApp.includes(app.id))
        setAppList(myAppList)
    }, [appData])

    return (
        <div className='bg-base-200'>
            <div className='flex flex-col justify-center items-center gap-4 py-10 '>
                <h1 className='text-4xl font-bold'>Your Installed Apps</h1>
                <p className='text-gray-500 text-sm'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex justify-between items-center px-2 py-5'>
                <div>
                    <h1 className='text-gray-600 text-2xl font-bold'>({appList.length}) App Found</h1>
                </div>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 rounded-lg text-gray-600 border-gray-500">Sorted By Download<MdOutlineArrowDropDown size={30} /></div>
                    <ul tabIndex="-1" className="dropdown-content menu rounded-box bg-base-100 z-1 w-52 p-2 shadow-sm">
                        <li className=''><a>High to Low</a></li>
                        <li className=''><a>Low to High</a></li>
                    </ul>
                </div>
            </div>

            <div className='flex flex-col gap-4 py-5'>
                {
                    appList?.map(myApp=> <MyApp myApp={myApp} key={myApp.id}></MyApp>)
                }
            </div>
        </div>
    );
};

export default Installation;