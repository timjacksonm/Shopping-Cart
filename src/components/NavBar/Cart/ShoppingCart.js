import React, { useState, useEffect } from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';
import Storage from '../../LocalStorage/LocalStorage';

function ShoppingCart(props) {
  const [cartPrice, setCartPrice] = useState();
  console.log(props);
  Storage.storeData(props.cart);
  const displayItemCount =
    props.cart.length === 1
      ? `${props.cart.length} Item`
      : `${props.cart.length} Items`;

  useEffect(() => {
    if (props.cart.length >= 2) {
      let price = props.cart //Listens to when an item is added to cart and re-calculates the price that shows in navbar.
        .map((item) => item.price)
        .reduce((a, b) => Number(a) + Number(b))
        .toFixed(2);
      setCartPrice(`$${price}`);
      return;
    }
    if (props.cart.length === 1) {
      setCartPrice(`$${props.cart[0].price}`);
      return;
    }
  }, [cartPrice, props.cart]);
  return (
    <div className='flex justify-center items-center md:absolute md:right-10'>
      <a href='#/Shop/Cart'>
        <RiShoppingCartLine
          size='2em'
          className='cursor-pointer hover:text-yellow-300'
        />
      </a>
      <div className='flex flex-col px-0.5 mx-2'>
        <div className='text-sm'>{cartPrice}</div>
        <div className='text-sm text-yellow-300 font-bold'>
          {props.cart.length === 0 ? null : displayItemCount}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
