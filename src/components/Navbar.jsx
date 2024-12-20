import React from 'react';
import logo from "../assests/logo.png";
import { navItems } from '../constants';
import { Menu,X } from 'lucide-react';
import { useState } from 'react';


const Navbar = ({ openModal,openCModal }) => {
  
  const [mobileDrawerOpen, setmobileFeawerOpen] = useState(false);

  const toggleNavbar = () => {
    setmobileFeawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
      <div className="container px-4 mx-auto relative text-sm">
        <div className='flex items-center justify-between'>
          <div className="flex item-center flex-shrink-0">
            <img className='h-10 w-10 mr-2' src={logo} alt="" />
            <span className='text-xl mt-2 tracking-tight'>VirtualR</span>
          </div>
          <ul className='hidden lg:flex ml-14 space-x-12 mt-1'>
            {navItems.map((item,index) => (
              <li key={index} className='relative group'>
                <a href={item.href} className='group'>{item.label} <span className='absolute bottom-0 left-0 bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500'></span></a>
              </li>
            ))}
          </ul>
          <div className='hidden lg:flex justify-center space-x-12 items-center'>
            <a href="#" onClick={ openModal } className='py-2 px-3 border rounded-md'>SignIn</a>
            <a href="#" onClick={ openCModal } className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 border rounded-md'>Crate an account</a>
          </div>
          <div className='lg:hidden md:flex flex-col justify-end mt-2'>
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu/>}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item,index) => (
                <li key={index} className='py-4'>
                  <a href={item.href} className='hover:text-black'>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className='flex space-x-8'>
                <button  onClick={ openModal } className='py-2 px-3 border rounded-md'>
                  SignIn
                </button>
                <button  onClick={ openCModal } className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 border rounded-md'>Create an</button>
            </div>
          </div>
        )}
      </div>

      {/* <Login/> */}
    </nav>
  )
};

export default Navbar
