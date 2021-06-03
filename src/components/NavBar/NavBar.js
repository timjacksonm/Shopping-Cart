import React from 'react';

function NavBar() {
  return (
    <div className='w-screen m-0 p-0 fixed text-white'>
      <nav>
        <ul className='flex bg-gray-700 w-full h-20 px-5 items-center relative'>
          <li>
            <a
              className='m-5 inline-block hover:border-b-2 hover:border-yellow-300'
              href='/'
            >
              Home
            </a>
          </li>
          <li>
            <a
              className='m-5 inline-block hover:border-b-2 hover:border-yellow-300'
              href='/shop'
            >
              Shop
            </a>
          </li>
          <li>
            <a
              className='m-5 inline-block hover:border-b-2 hover:border-yellow-300'
              href='/contact'
            >
              Contact Us
            </a>
          </li>
          <li className='absolute m-5 right-5 inline-block w-32'>
            <div className='flex w-full justify-between'>
              <button className='hover:border-b-2 hover:border-yellow-300'>
                Cart
              </button>
              <div>Item Count</div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default NavBar;
