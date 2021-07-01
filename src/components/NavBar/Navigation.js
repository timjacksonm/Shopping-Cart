import React from 'react';
import ShoppingCart from './Cart/ShoppingCart';

function Navigation(props) {
  return (
    <nav className='hidden md:block'>
      <ul className='flex bg-gray-700 w-full h-20 px-5 items-center relative'>
        <li>
          <a
            className='m-5 inline-block hover:border-b-2 font-bold hover:border-yellow-300'
            href='#/'
            onClick={(e) => {
              if (window.location.href.includes('#/Shop')) {
                if (props.cart.length > 0) {
                  let choice = window.confirm(
                    'Leave shop page? Cart will be reset.'
                  );
                  if (!choice) {
                    e.preventDefault();
                  }
                }
              }
            }}
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
        {window.location.href.includes('#/Shop') && ( //Show the cart only on the shop page.
          <ShoppingCart cartPrice={props.cartPrice} cart={props.cart} />
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
