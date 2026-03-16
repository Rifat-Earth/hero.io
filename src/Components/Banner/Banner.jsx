import React from 'react';
import { FaAppStoreIos } from 'react-icons/fa';
import { SiGoogleplay } from 'react-icons/si';
import mobileLogo from "../../assets/hero.png"

const Banner = () => {
    return (
        <div>
            <div>
                <div className='text-center flex flex-col justify-center p-2 gap-2 items-center'>
                    <h1 className='text-4xl font-bold'>We Build</h1>
                    <h1 className='text-4xl font-bold'><span className='text-[#9F62F2]'>Productive</span> Apps</h1>
                    <h1 className='text-sm text-gray-500'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br />Our goal is to turn your ideas into digital experiences that truly make an impact.</h1>
                </div>
                <div className='text-center flex mt-4 justify-center gap-2 items-center'>
                    <a href="https://play.google.com/store/games?hl=en" target='_blank'> <button className="btn text-gray-500">
                        <SiGoogleplay className="text-green-500" /> Google Play
                    </button>
                    </a>
                    <a href="https://www.apple.com/app-store/" target='_blank'>
                        <button className="btn ">
                            <FaAppStoreIos className="text-blue-500 text-xl" />App Store
                        </button></a>
                </div>
            </div>
            <div className='my-5'>
                <div className='flex justify-center items-center p-2'>
                    <img className='w-[600px] h-[300px]' src={mobileLogo} alt="mobile" />
                </div>
                <div className='py-12 w-full justify-center items-center flex flex-col bg-linear-to-r from-[#632EE3] to-[#9F62F2] rounded-sm'>
                    <div className='flex justify-center items-center p-4 text-center'>
                        <h1 className=' text-3xl  md:text-4xl font-bold text-white '>Trusted by Millions, Built for You</h1>
                    </div>

                    <div className="gap-5 p-4 md:p-0 md:gap-24 flex flex-col md:flex-row mt-5">
                        <div className=" text-white  flex flex-col justify-center items-center gap-2">
                            <div className="stat-title text-white">Total Download</div>
                            <div className="stat-value text-5xl">29.6M</div>
                            <div className="stat-desc flex justify-center text-white">21% more than last month</div>
                        </div>
                        <div className="text-white flex flex-col justify-center items-center gap-2">
                            <div className="stat-title text-white ">Total reviews</div>
                            <div className="stat-value text-5xl">902K</div>
                            <div className="stat-desc text-white">21% more than last month</div>
                        </div>
                        <div className="text-white flex flex-col justify-center items-center gap-2">
                            <div className="stat-title text-white">Active Apps</div>
                            <div className="stat-value text-5xl ">132+</div>
                            <div className="stat-desc text-white">21% more than last month</div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Banner;