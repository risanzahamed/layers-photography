import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';

const Root = () => {
    return (
        <div className="bg-[#040404]">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;