import React from 'react';
import NavLink from './NavLink';

const MobileMenu = ({ isOpen, items, onItemClick }) => {
  if (!isOpen) return null;

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {items.map((item) => (
          <NavLink
            key={item.label}
            {...item}
            className="block text-base text-[#252C3A]"
            onClick={onItemClick}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;