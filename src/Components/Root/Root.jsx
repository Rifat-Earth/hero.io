import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet, useNavigation } from 'react-router';
import CustomLoader from '../CustomLoader/CustomLoader';

const Root = () => {

    const navigation = useNavigation();


    return (
        <div className='md:px-4'>
            <Navbar/>
            {navigation.state === "loading" ? (
            <CustomLoader/>
            )
                : <Outlet/>}
            <Footer/>
        </div>
    );
};

export default Root;