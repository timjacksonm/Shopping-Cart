import React, { useState, useEffect } from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';

function ShoppingCart(props) {
  return (
    <div className='flex justify-center items-center md:absolute md:right-10'>
      <RiShoppingCartLine size='2em' className='cursor-pointer' />
      <div className='flex flex-col px-0.5'>
        <div className='text-sm'>{props.cartPrice}</div>
        <div className='text-sm text-yellow-300 font-bold'>{'1 item'}</div>
      </div>
    </div>
  );
}

export default ShoppingCart;
