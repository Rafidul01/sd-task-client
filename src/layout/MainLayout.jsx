import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <div className='mx-auto'>
               <Outlet/> 
            </div>
            
            
        </div>
    );
};

export default MainLayout;