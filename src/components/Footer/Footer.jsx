import React, { useState } from 'react'
import { NAV_ITEMS } from '../../constants/navigation'
import NavLink from '../Navbar/NavLink'
import FooterNavLink from './FooterNavLink';

const Footer = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('#home'); // Track active link

    const handleLinkClick = (href) => {
        setActiveLink(href); // Set the active link
        setIsMenuOpen(false); // Close menu on click (for mobile)
    };

    return (
        <div className='w-full flex items-center justify-center bg-primary text-white px-4 py-2'>
            <div className='w-full flex flex-col lg:flex-row justify-between min-w-lg max-w-5xl items-center text-white gap-2'>
                <p className='lg:text-sm text-xs'>
                    © DIGIWHIZ 2019
                </p>

                <div className="flex lg:space-x-7 sm:space-x-3 items-center justify-center text-white">
                    {NAV_ITEMS.map((item) => (
                        <FooterNavLink
                            key={item.label}
                            href={item.href}
                            label={item.label}
                            onClick={() => handleLinkClick(item.href)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer