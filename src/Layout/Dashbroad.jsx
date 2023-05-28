import React from 'react';
import { Link, Outlet } from 'react-router-dom';
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

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>


                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content">

                        <li> <Link to="/"> <FaHome /> User Home</Link> </li>
                        <li>  <Link> <FaCalendarAlt></FaCalendarAlt> Resevations</Link> </li>
                        <li>  <Link> <FaCalendarAlt></FaCalendarAlt> Payment History</Link> </li>
                        <li>  <Link to="/dashbroad/mycart"> <FaShoppingCart></FaShoppingCart> My Cart</Link> </li>
                        <div className="divider"></div>
                        <li>  <Link> <FaHome /> Home</Link> </li>
                        <li>  <Link> <FaHome /> Our Menu</Link> </li>
                    </ul>

                </div>
            </div>
        </>
    );
};

export default Dashbroad;