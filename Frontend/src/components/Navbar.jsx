import React, { useEffect, useState } from 'react';
import Login from './Login';
import Logout from './Logout';
import { useAuth } from '../context/AuthProvider';

const Navbar = () => {
  const [authUser, setAuthUser] = useAuth();
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li><a href='/' className='font-bold'>Home</a></li>
      <li><a href='/course' className='font-bold'>Course</a></li>
      <li><a href='/contact' className='font-bold'>Contact</a></li>
      <li><a href='/about' className='font-bold'>About</a></li>
    </>
  );

  return (
    <>
      <div className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 ${
        sticky
          ? "sticky-navbar bg-base-200 duration-0 ease-in-out transition-all shadow-md"
          : ""
      }`}>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="lg:hidden">
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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                {navItems}
              </ul>
            </div>
            <a className="text-2xl font-bold cursor-pointer">Book Store</a>
          </div>

          <div className='navbar-end space-x-3'>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                {navItems}
              </ul>
            </div>

            <div className="hidden md:block">
              <label className="px-3 py-1 rounded-md flex items-center gap-2">
                <input
                  type="text"
                  className="grow outline-none rounded-md"
                  placeholder='Search'
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd" />
                </svg>
              </label>
            </div>

            {authUser ? (
              <Logout />
            ) : (
              <div>
                <a
                  className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 cursor-pointer duration-300"
                  onClick={() => document.getElementById("my_modal_3").showModal()}
                >
                  Login
                </a>
                <Login />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
