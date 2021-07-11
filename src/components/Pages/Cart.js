import React, { useState, useEffect } from 'react';
import Storage from '../LocalStorage/LocalStorage';
import NavBar from '../NavBar/NavBar';
import { TiDelete } from 'react-icons/ti';

function Cart() {
  const [cart, setCart] = useState(Storage.retrieveData());
  const [cartPrice, setCartPrice] = useState();
  const quanityPerItem = cart.reduce((acc, currentValue) => {
    if (!acc[currentValue.id]) {
      acc[currentValue.id] = 0;
    }
    acc[currentValue.id]++;
    return acc;
  }, {});

  const deleteItem = (e) => {
    const targetName = e.target.parentElement.id || e.target.id;
    if (e.target.parentElement.id || e.target.id) {
      setCart((prevState) =>
        prevState.filter((item) => item.id !== targetName)
      );
    }
  };

  useEffect(() => {
    if (cart.length > 1) {
      let price = cart
        .map((item) => item.price)
        .reduce((a, b) => Number(a) + Number(b))
        .toFixed(2);
      setCartPrice(`$${price}`);
      return;
    }
    if (cart.length === 1) {
      setCartPrice(`$${cart[0].price}`);
      return;
    }
    setCartPrice('$0');
    Storage.storeData(cart);
  }, [cartPrice, cart]);

  let newArray = [];

  return (
    <div className='bg-default-pattern bg-cover h-screen'>
      <NavBar cart={cart} />
      <div className='absolute top-20 h-full p-2 bg-white rounded overflow-auto md:h-5/6 md:top-28 md:right-0 md:left-0 md:mx-48'>
        <div className='m-4 text-lg font-bold underline'>Shopping Cart</div>
        {cart.map((item) => {
          if (newArray.includes(item.id)) {
            return null;
          }
          newArray.push(item.id);
          return (
            <div
              key={item.id}
              className='mx-4 my-1 p-2 border-2 flex flex-col items-center md:items-stretch'
            >
              <div className='flex justify-between'>
                <div className='my-1'>{`${item.brand} ${item.name}`}</div>
                <TiDelete
                  onClick={deleteItem}
                  id={item.id}
                  size='2em'
                  className='hover:text-yellow-300'
                />
              </div>
              <div className='flex items-center text-lg md:mx-20 md:justify-end'>{`$${item.price}`}</div>
              <div className='flex flex-col md:flex-row'>
                <img
                  className='my-1 w-28'
                  src={item.previewImage}
                  alt='item.id'
                />
                <div className='flex w-32 justify-around items-center p-2 m-1'>
                  <div className='mx-2 text-center'>{`Qty ${
                    quanityPerItem[item.id]
                  }`}</div>
                </div>
              </div>
            </div>
          );
        })}
        <div className='flex items-center px-6 mb-6 w-full md:justify-end'>
          <div className='font-bold mx-6'>{`Total Price ${cartPrice}`}</div>
          <button
            onClick={() =>
              alert('This is not a real store. Thanks for shopping!')
            }
            className='bg-gray-700 text-white font-bold rounded p-2 m-2 w-28 self-center border-2 border-gray-700 hover:border-yellow-300 hover:text-yellow-300'
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
