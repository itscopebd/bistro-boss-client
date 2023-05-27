import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';
import Navbar from '../pages/Shared/Navbar';

const Main = () => {
    const location = useLocation();

    const hideHeaderFooter = location.pathname.includes("login") || location.pathname.includes("singup")
    
    return (
        <div>
            {
                hideHeaderFooter || <Navbar></Navbar>
            }
            <Outlet></Outlet>
            {
                hideHeaderFooter || <Footer></Footer>
            }

        </div>
    );
};

export default Main;