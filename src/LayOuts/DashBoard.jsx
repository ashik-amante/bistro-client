import React from 'react';
import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUser, FaUsers, FaUtensils, FaVoicemail } from "react-icons/fa";
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';

const DashBoard = () => {
    const [carts] = useCart()

    // get is admin value fro m database 
    const isAdmin = true
    return (
        <div className='flex'>
            <div className="w-64 min-h-screen bg-orange-500">
                <ul className='menu p-4'>

                    {

                        isAdmin ? <>
                            <li className='font-semibold'>
                                <NavLink to='/dashboard/adminHome'>   <FaHome />   Admin Home  </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/addItems'>   <FaUtensils />    Add Items</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/manageItems'>   <FaList />   Manage Items</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/booking'>   <FaBook />  Manage Bookings</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/allUsers'>   <FaUsers /> All Users</NavLink>
                            </li>
                           
                        </>
                            :
                            <>
                                <li className='font-semibold'>
                                    <NavLink to='/dashboard/cart'>   <FaShoppingCart />   My cart ({carts.length}) </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/userHome'>   <FaHome />    User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/reservation'>   <FaCalendar />   Reservation</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/payment'>   <FaCalendar />   Payment History</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/review'>   <FaAd /> Add a  Reviews</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/bookings'>   <FaAd /> My  Bookings</NavLink>
                                </li>
                            </>
                    }


                    <div className="divider"></div>


                    <li>
                        <NavLink to='/'>   <FaHome />     Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/menu'>   <FaSearch />    Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/salad'>   <FaEnvelope />   Contact</NavLink>
                    </li>
                </ul>
            </div>

            {/*  */}
            <div className='flex-1 p-8'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;