import React from 'react';
import Logo from '../../assets/Timberland Tools.png';

function Nav() {
  return (
    <div className='text-yellow-300 font-serif flex justify-center items-center relative md: flex flex-col'>
      <img className='m-3' src={Logo} alt='' width='35%' />
      <ul className='flex w-1/6 justify-around my-3'>
        <li>
          <a
            className='bg-gray-800 border-gray-200 border-2 p-2 tracking-wider font-semibold hover:bg-gray-300 hover:text-black'
            href='/shop'
          >
            Shop
          </a>
        </li>
        <li>
          <a
            className='bg-gray-800 border-gray-200 border-2 p-2 tracking-wider font-semibold hover:bg-gray-300 hover:text-black'
            href='/contact'
          >
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Nav;
