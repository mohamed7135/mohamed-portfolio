// Navigation.js

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

const Navigation = () => {
  const [open, setOpen] = useState(false);

  const Hamburgericon = (
    <HiOutlineMenu className='Hamburger' size='40px' color='black' onClick={() => setOpen(!open)} />
  );
  const closeicon = (
    <AiOutlineClose className='Closebtn' size='40px' color='black' onClick={() => setOpen(!open)} />
  );

  return (
    <nav className='Navigation'>
      {open ? closeicon : Hamburgericon}
      {open && (
        <ul>
          <li>
            <NavLink to='/' onClick={() => setOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' onClick={() => setOpen(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='/works' onClick={() => setOpen(false)}>
              Works
            </NavLink>
          </li>
          {/* Add other navigation links as needed */}
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
