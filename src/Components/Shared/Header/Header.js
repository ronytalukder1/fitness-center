import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import profileImage from '../../../assets/images/profile.jpg'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    let [currentUser, setCurrentUser] = useState("");
    const navigate = useNavigate();

    //LogOut
    const handleSignOut = () => {

        logOut()
            .then(() => {
                navigate('/')
                setCurrentUser("")

            })
            .catch(err => { console.error(err) })
    }


    //Geting specific user data from the server
    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/users/${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setCurrentUser(data.username)
                })
        }
    }, [user?.email])

    //Navbar Items
    const menuItems = <>
        <li><a className='font-bold text-[14px]' href="/home">হোম</a></li>
        <li><a className='font-bold text-[14px]' href="/home">আমাদের সম্পর্কে</a></li>
        <li><a className='font-bold text-[14px]' href="/home">সাফল্যের গল্প</a></li>
        <li><a className='font-bold text-[14px]' href="/home">ফ্রিলান্সিং</a></li>
        {
            currentUser !== "" &&
            <button><img title={currentUser} className='w-[35px]' src={profileImage} alt="" /></button>


        }





    </>
    return (
        <div className="navbar px-10 mx-auto" style={{
            width: "1320px"
        }}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box ">
                        {menuItems}
                        {
                            user?.email ? <li><Link onClick={handleSignOut} to='/home'><button className="btn btn-error text-white">LogOut</button></Link></li>
                                :
                                <li><Link to='/'><button className="btn btn-error text-white">Login</button></Link></li>
                        }
                    </ul>
                </div>
                <a href='/' className="btn btn-ghost normal-case text-xl"><img className='w-44' src={logo} alt="" /></a>
            </div>
            <div className=" hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                    {
                        user?.email ? <li><Link onClick={handleSignOut} to='/home'><button className="btn btn-error text-white">LogOut</button></Link></li>
                            :
                            <li><Link to='/'><button className="btn btn-error text-white">Login</button></Link></li>
                    }
                </ul>
            </div>

        </div>
    );
};

export default Header;