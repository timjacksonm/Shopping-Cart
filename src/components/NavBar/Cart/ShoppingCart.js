import React from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';

function ShoppingCart() {
  return (
    <div className='flex justify-center items-center md:absolute md:right-10'>
      <RiShoppingCartLine size='2em' className='cursor-pointer' />
      <div className='flex flex-col px-0.5'>
        <div className='text-sm'>{'$9.99'}</div>
        <div className='text-sm text-yellow-300 font-bold'>{'1 item'}</div>
      </div>
    </div>
  );
}

export default ShoppingCart;
