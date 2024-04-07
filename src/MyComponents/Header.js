import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 py-4 pr-4 pl-1">
      <div className="container mx-auto flex justify-between">
        <div className="ml-[-2vw]">
          <Link to="/" className="text-white font-bold no-underline text-xl md:text-2xl lg:text-4xl">Internworld</Link>
        </div>
  {
    !isOpen &&  <input className="md:mt-4 px-3 py-2 rounded-md text-sm md:hidden block" type="search" placeholder="Search..."></input>
  }
        
    
        <ul className={`md:flex md:items-center md:w-aut ${isOpen ? 'block' : 'hidden'}`}>
          <li>   <div className='mr-4 mb-2' >
        <input className="px-3 py-2 rounded-md text-sm" type="search" placeholder="Search..."></input>
         
      </div ></li>
          <li className='py-1 '><Link to="/" className="text-white hover:bg-gray-700 px-3  rounded-md font-medium no-underline py-1 text-[16px] ">Home</Link></li>
          <li className='py-1 '><Link to="/about" className="text-white hover:bg-gray-700 px-3 py-1 rounded-md text-sm font-medium no-underline text-[16px]">About</Link></li>
          <li className='py-1'><Link to="/services" className="text-white hover:bg-gray-700 px-3 py-1 rounded-md text-sm font-medium no-underline text-[16px]">Services</Link></li>
          <li className='py-1'><Link to="/team" className="text-white hover:bg-gray-700 px-3 py-1 rounded-md text-sm font-medium no-underline text-[16px]">Team</Link></li>
          <li className='py-1'><Link to="/login-signup" className="text-white hover:bg-gray-700 px-3 py-1 rounded-md text-sm font-medium no-underline text-[16px]">Login/SignUp</Link></li>
        </ul>
        <div className="md:hidden text-right">
          <button onClick={toggleNavbar} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M4 6h16M4 12h16M4 18h16" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
    
    </nav>
  );
}
