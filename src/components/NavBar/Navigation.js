import React from 'react';
import ShoppingCart from './Cart/ShoppingCart';

function Navigation() {
  return (
    <nav className='hidden md:block'>
      <ul className='flex bg-gray-700 w-full h-20 px-5 items-center relative'>
        <li>
          <a
            className='m-5 inline-block hover:border-b-2 font-bold hover:border-yellow-300'
            href='#/'
          >
            Home
          </a>
        </li>
        <li>
          <a
            className='m-5 inline-block hover:border-b-2 font-bold hover:border-yellow-300'
            href='#/Shop'
          >
            Shop
          </a>
        </li>
        <li>
          <a
            className='m-5 inline-block hover:border-b-2 font-bold hover:border-yellow-300'
            href='#/ContactUs'
          >
            Contact Us
          </a>
        </li>
        <ShoppingCart />
      </ul>
    </nav>
  );
}

export default Navigation;
