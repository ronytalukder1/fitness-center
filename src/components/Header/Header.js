import React from 'react';
import logo from '../../assets/download.png';

const Header = () => {
    const menuItems = <>
        <li><a className='font-bold' href="/">Home</a></li>
        <li><a className='font-bold' href="/">About</a></li>
        <li><a className='font-bold' href="/">Blog</a></li>
        <li><a className='font-bold' href="/">Gallary</a></li>
        <li><a className='font-bold' href="/">Contact</a></li>
    </>
    return (
        <div className="navbar px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a href='/' className="btn btn-ghost normal-case text-xl"><img className='w-32 -mt-7' src={logo} alt="" /></a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>

        </div>
    );
};

export default Header;