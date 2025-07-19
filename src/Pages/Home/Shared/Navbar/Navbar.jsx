import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Providers/AuthProvider';
import { FaCartPlus } from "react-icons/fa6";
import useCart from '../../../../hooks/useCart';
import useAdmin from '../../../../hooks/useAdmin';

const Navbar = () => {
    const [carts] = useCart()
    const { user, logOut } = useContext(AuthContext)
    const [isAdmin] = useAdmin()
    const handleLogOut = () => {
        logOut()
    }
    console.log(user);

    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to='/order/salad'>Order food</Link></li>
        {
            user && isAdmin &&  <li><Link to='/dashboard/adminHome'>dashboard</Link></li>

        }
        {
            user && !isAdmin &&  <li><Link to='/dashboard/userHome'>Dashboard</Link></li>

        }

        <li>
            <Link to='/dashboard/cart'>
           
                <button className="btn gap-2 btn-outline">
                     <FaCartPlus className='text-2xl' />
                    <div className="badge badge-secondary">{carts.length}</div>
                </button>
            </Link>
        </li>

        {
            user ? <>
                <li>

                    <button onClick={handleLogOut} className="btn  btn-outline">LogOut</button></li>
            </> :
                <><li>
                    <Link to='/login'>Login</Link>
                </li></>
        }

    </>
    return (
        <div>
            <div className="navbar fixed z-10 max-w-screen-xl mx-auto text-white bg-black bg-opacity-30 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow  ">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl uppercase">Bistro BOSS <br /> RESTAURENT</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex items-center">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;