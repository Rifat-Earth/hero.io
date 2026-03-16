import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Banner from '../../Components/Banner/Banner';
import TrendingApp from '../../Components/TrendingApp/TrendingApp';
import { useLoaderData } from 'react-router';

const Home = () => {

    const appsData = useLoaderData();

    return (
        <div className='my-10'>
           <Banner></Banner>
           <TrendingApp appsData={appsData}></TrendingApp>
        </div>
    );
};

export default Home;