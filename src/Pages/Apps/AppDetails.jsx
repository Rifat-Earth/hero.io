import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import ratingLogo from "../../assets/icon-ratings.png"
import downloadsLogo from "../../assets/icon-downloads.png"
import reviewsLogo from "../../assets/icon-review.png"

const AppDetails = () => {

    const {id} = useParams()
    const appId = parseInt(id)   
    const appData = useLoaderData()
    const detailsData = appData.find(details => details.id === appId)
    const { image,title, companyName, ratingAvg, downloads,reviews } = detailsData

    return (
        <div className=''>
            <div className='flex flex-col md:flex-row py-10 gap-8'>
                <div className=' object-cover bg-base-200'>
                    <img className='w-72 p-2 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl' src={image} alt="not found" />
                </div>
                <div className='bg-base-200 w-full px-4 rounded-xl'>
                    <div className='border-gray-200 border-b-2 py-2 flex flex-col gap-2 '>
                    <h1 className='font-bold text-gray-800 italic'>App Name : {title}</h1>
                    <h1 className='italic'>Developed By :<span className='text-blue-500 font-bold py-4'> {companyName}</span></h1>
                  
                    </div>
                <div className='flex gap-12 mt-4'>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <img className='w-5 animate-bounce' src={downloadsLogo} alt="not found" />
                        <p className='text-gray-500 text-xs'>Download</p>
                        <h1>{downloads}M</h1>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <img className='w-5' src={ratingLogo} alt="" />
                        <p className='text-gray-500 text-xs'>rating</p>
                        <h1>{ratingAvg }</h1>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <img className='w-5' src={reviewsLogo} alt="" />
                        <p className='text-gray-500 text-xs'>Total Reviews</p>
                        <h1>{reviews }k+</h1>
                    </div>
                </div>
                 <button className='btn bg-[#00D390] text-white mt-2'>Install Now (291 MB)</button>
                </div>
               
            </div>
            
        </div>
    );
};

export default AppDetails;