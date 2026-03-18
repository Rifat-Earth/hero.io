import React, { useEffect, useState } from 'react';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { useLoaderData } from 'react-router';
import { toGetData } from '../../Components/Utility/addToLocal';
import MyApp from './MyApp';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const Installation = () => {

    const [appList, setAppList] = useState([]);
    const [sortOrder, setSortOrder] = useState("");


    const appData = useLoaderData()
    // console.log(appData);

    useEffect(() => {
        const storeApp = toGetData()
        const myAppList = appData.filter(app => storeApp.includes(app.id))
        setAppList(myAppList)
    }, [appData])

    const sortedApp = [...appList]?.sort((a, b) => {
        if (sortOrder === "asc") {
            return a.downloads - b.downloads
        } else if (sortOrder === "desc") {
            return b.downloads - a.downloads
        } else {
            return 0;
        }
    })

    const handleUninstall = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You want to uninstall this app!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#6c757d",
            confirmButtonText: "Yes, uninstall it!"
        }).then((result) => {

            if (result.isConfirmed) {
                const DeleteApp = appList.filter(d => d.id != id)
                setAppList(DeleteApp)
                const storedApps = toGetData().filter(appid => appid !== id)
                localStorage.setItem("appList", JSON.stringify(storedApps)) 
                toast.success("App uninstalled successfully 🚀")     
            }
        })
    }

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
                        <li onClick={() => setSortOrder("desc")} ><a>High to Low</a></li>
                        <li onClick={() => setSortOrder("asc")} ><a>Low to High</a></li>
                    </ul>
                </div>
            </div>

            <div className='flex flex-col gap-4 py-5'>
                {
                    sortedApp?.map(myApp => <MyApp handleUninstall={handleUninstall} myApp={myApp} key={myApp.id}></MyApp>)
                }
            </div>
        </div>
    );
};

export default Installation;