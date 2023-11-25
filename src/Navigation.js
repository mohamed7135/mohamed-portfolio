import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import Logo from './images/logo.png';

const Navigation = () => {
  const [open, setOpen] = useState(false);

  const HamburgerIcon = (
    <HiOutlineMenu className={`Hamburger ${open ? 'hidden' : ''}`} size='40px' color='black' onClick={() => setOpen(!open)} />
  );
  const CloseIcon = (
    <AiOutlineClose className={`Closebtn ${!open ? 'hidden' : ''}`} size='40px' color='black' onClick={() => setOpen(!open)} />
  );

  return (
    <nav className={`Navigation ${open ? 'open' : ''}`}>
      {open ? CloseIcon : HamburgerIcon}
      <a href="/"> 

      {!open && <img src={Logo} alt="Logo" className="logo" />}
      </a>
      {open && (
        <div className='menu-content'>
          <NavLink to='/' onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to='/about' onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to='/works' onClick={() => setOpen(false)}>Works</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
