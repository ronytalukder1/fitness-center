import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/download.png';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = () => {
        logOut()
            .then(() => {
                navigate('/login')
            })
            .catch(err => { console.error(err) })
    }

    const menuItems = <>
        <li><a className='font-bold' href="/">Home</a></li>
        <li><a className='font-bold' href="/about">About</a></li>
        <li><a className='font-bold' href="/blog">Blog</a></li>
        <li><a className='font-bold' href="/gallary">Gallary</a></li>
        <li><a className='font-bold' href="/contact">Contact</a></li>
        {
            user?.email ? <li><Link onClick={handleSignOut} to='/login'><button className="btn btn-success text-white">LogOut</button></Link></li>
                :
                <li><Link to='/login'><button className="btn btn-success text-white">Login</button></Link></li>
        }


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