import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../../constants/navigation';
import NavLink from './NavLink';
import MobileMenu from './MobileMenu';
import { FaSearch } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setIsMenuOpen(false);
  };

  return (
    <div className='fixed w-full bg-white shadow-md max-h-[100px] z-50'>
      <div className='hidden w-full bg-bg-2 sm:flex items-center justify-center px-4 py-2'>
        <div className='sm:flex lg:flex w-full text-secondary text-xs  min-w-lg max-w-5xl'>
          <div className='flex w-full justify-between items-center'>
            <p>Have any questions ?</p>
            <div className='flex items-center justify-between space-x-4'>
              <div className='flex items-center space-x-2'>
                <div className='p-[3px] bg-[#464646] text-white rounded-full'>
                  <IoMdMailOpen />
                </div>
                <p>contact@mail.com</p>
              </div>
              <span className="text-gray-400">|</span>
              <div className='flex items-center space-x-2'>
                <div className='p-[3px] bg-[#464646] text-white rounded-full'>
                  <BiSolidPhoneCall />
                </div>
                <p>+080 0444 333 444</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='fixed w-full bg-white shadow-md z-50 px-4 py-2'>
        <nav className="w-full mx-auto min-w-lg max-w-5xl">
          <div className=" flex justify-between items-center"> {/* Changes mx-auto */}
            {/* Logo Section */}
            <div>
              <img src="/images/logo.png" alt="Logo" className="h-8" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-3 items-center">
              <div className="flex space-x-7 items-center justify-center">
                {NAV_ITEMS.map((item) => (
                  <NavLink
                    key={item.label}
                    href={item.href}
                    label={item.label}
                    isActive={activeLink === item.href}
                    onClick={() => handleLinkClick(item.href)}
                  />
                ))}
              </div>
              <span className="text-gray-200">|</span>
              <div className="bg-primary p-1.5 rounded-full hover:cursor-pointer">
                <FaSearch className="text-white" />
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-primary"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <MobileMenu
            isOpen={isMenuOpen}
            items={NAV_ITEMS}
            onItemClick={handleLinkClick}
          />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
