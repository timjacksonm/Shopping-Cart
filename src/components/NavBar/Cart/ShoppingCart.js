import React from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';

function ShoppingCart(props) {
  const displayItemCount =
    props.cart.length === 1
      ? `${props.cart.length} Item`
      : `${props.cart.length} Items`;
  return (
    <div className='flex justify-center items-center md:absolute md:right-10'>
      <RiShoppingCartLine size='2em' className='cursor-pointer' />
      <div className='flex flex-col px-0.5'>
        <div className='text-sm'>{props.cartPrice}</div>
        <div className='text-sm text-yellow-300 font-bold'>
          {props.cart.length === 0 ? null : displayItemCount}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
