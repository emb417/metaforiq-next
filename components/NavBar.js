'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { GiHeavyRain, GiPinballFlipper, GiBlackball, GiBrain } from "react-icons/gi";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    {
        id: 1,
        icon: <GiBrain />,
        href: '/',
        text: 'Home',
      },
      {
        id: 2,
        icon: <GiHeavyRain />,
        href: '/force-rain',
        text: 'Force Rain',
      },
      {
        id: 3,
        icon: <GiPinballFlipper />,
        href: '/pinball',
        text: 'Pinball',
      },
      {
        id: 4,
        icon: <GiBlackball  />,
        href: '/libowski',
        text: 'Libowski',
      },
  ];

  return (
    <div className='bg-slate-950 border-b border-b-teal-950 flex justify-start items-start max-w-full mx-auto text-white uppercase sans'>
      {/* Logo */}
      <h1 className='w-full text-3xl font-bold text-teal-300 pl-4 p-1'>MetaForIQ</h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex items-center pt-1'>
        {navItems.map(item => (
          <Link
            href={item.href}
            className=""
          >
            <li
              key={item.id}
              className='flex items-center cursor-pointer duration-300 hover:text-teal-300 min-w-[max-content] mr-4 p-2 gap-1'
            >
              {item.icon}
              {item.text}
            </li>
          </Link>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden pr-4 pt-3'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-teal-950 bg-slate-950 ease-in-out duration-500 z-50'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full uppercase text-3xl font-bold text-teal-300 pl-4 py-1'>MetaForIQ</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <Link
            href={item.href}
            onClick={handleNav}
            className="flex my-4 text-xl cursor-pointer duration-300 hover:text-teal-300"
          >
            <li
              key={item.id}
              className='flex ml-4 items-center gap-x-1 min-w-[max-content]'
            >
              {item.icon}
              {item.text}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;