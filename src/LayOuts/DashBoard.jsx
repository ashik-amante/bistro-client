import React from 'react';
import { FaAd, FaCalendar, FaHome, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className='flex'>
            <div className="w-64 min-h-screen bg-orange-500">
                <ul className='menu p-4'>

                    <li><NavLink to='/dashboard/cart'>   <FaShoppingCart />   My cart</NavLink></li>
                    <li><NavLink to='/dashboard/userHome'>   <FaHome />    User Home</NavLink></li>
                    <li>
                        <NavLink to='/dashboard/reservation'>   <FaCalendar />   Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/review'>   <FaAd /> Add a  Reviews</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/bookings'>   <FaAd /> My  Bookings</NavLink>
                    </li>

                </ul>
            </div>

            {/*  */}
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;