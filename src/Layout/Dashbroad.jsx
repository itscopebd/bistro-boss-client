import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaHome, FaCalendarAlt, FaShoppingCart } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
const Dashbroad = () => {
    return (
        <>
            <Helmet>
                <title>Deshbroad</title>
            </Helmet>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">

                    <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden">Open drawer</label>


                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content">

                        <li> <NavLink to="/deshbroad/home" className= {({isActive})=>isActive? "text-white":""}> <FaHome /> User Home</NavLink> </li>
                        <li>  <NavLink to="/deshbroad/reservations" className= {({isActive})=>isActive? "text-white":""}> <FaCalendarAlt></FaCalendarAlt> Resevations</NavLink> </li>
                        <li>  <NavLink to="/dashbroad/history" className= {({isActive})=>isActive? "text-white":""}> <FaCalendarAlt></FaCalendarAlt> Payment History</NavLink> </li>
                        <li>  <NavLink to="/dashbroad/mycart" className= {({isActive})=>isActive? "text-white":""}> <FaShoppingCart></FaShoppingCart> My Cart</NavLink> </li>
                        <div className="divider"></div>
                        <li>  <NavLink to="/"  className= {({isActive})=>isActive? "text-white":""}> <FaHome /> Home</NavLink> </li>
                        <li>  <NavLink to="/our-menu" className= {({isActive})=>isActive? "text-white":""}> <FaHome /> Our Menu</NavLink> </li>
                    </ul>

                </div>
            </div>
        </>
    );
};

export default Dashbroad;