import React from 'react';
import { CgMenuRound } from 'react-icons/cg';
import { CgCloseO } from 'react-icons/cg';
import { useState } from 'react';
import ShoppingCart from './Cart/ShoppingCart';

function MobileNavigation(props) {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <CgMenuRound size='40px' onClick={() => setOpen(!open)} />
  );

  const closeIcon = <CgCloseO size='40px' onClick={() => setOpen(!open)} />;

  return (
    <nav className='flex justify-end bg-gray-700 w-full h-20 px-5 items-center relative md:hidden'>
      <ShoppingCart cartPrice={props.cartPrice} />
      {open ? closeIcon : hamburgerIcon}
      {open && (
        <ul className='absolute pl-4 pt-4 top-20 left-0 w-full text-left bg-gray-900 bg-opacity-50 border-t-2 border-yellow-300'>
          <li className='py-2 font-bold hover:text-yellow-300'>
            <a href='#/'>Home</a>
          </li>
          <li className='py-2 font-bold hover:text-yellow-300'>
            <a href='#/Shop'>Shop</a>
          </li>
          <li className='py-2 font-bold hover:text-yellow-300'>
            <a href='#/ContactUs'>Contact Us</a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default MobileNavigation;
