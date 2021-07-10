import React, { useState, useEffect } from 'react';
import Storage from '../LocalStorage/LocalStorage';
import NavBar from '../NavBar/NavBar';
import { FaPlusSquare, FaMinusSquare } from 'react-icons/fa';
import { TiDelete } from 'react-icons/ti';

function Cart() {
  const Data = Storage.retrieveData();
  const [cartPrice, setCartPrice] = useState();
  useEffect(() => {
    if (Data.length > 1) {
      let price = Data.map((item) => item.price) //Listens to when an item is added to cart and re-calculates the price that shows in navbar.
        .reduce((a, b) => Number(a) + Number(b))
        .toFixed(2);
      setCartPrice(`$${price}`);
      return;
    }
    if (Data.length === 1) {
      setCartPrice(`$${Data[0].price}`);
      return;
    }
  }, [cartPrice, Data]);

  console.log(cartPrice);

  return (
    <div className='bg-default-pattern bg-cover h-screen'>
      <NavBar cart={Data} />
      <div className='absolute top-28 h-5/6 p-2 bg-white rounded overflow-auto md:right-0 md:left-0 md:mx-48'>
        <div className='m-4 text-lg font-bold underline'>Shopping Cart</div>
        {Data.map((item) => {
          return (
            <div
              key={item.id}
              className='mx-4 my-1 p-2 border-2 flex flex-col items-center md:items-stretch'
            >
              <div className='flex justify-between'>
                <div className='my-1'>{`${item.brand} ${item.name}`}</div>
                <TiDelete size='2em' className='' />
              </div>
              <div className='flex items-center text-lg md:mx-20 md:justify-end'>{`$${item.price}`}</div>
              <div className='flex flex-col md:flex-row'>
                <img
                  className='my-1 w-28'
                  src={item.previewImage}
                  alt='item.id'
                />
                <div className='flex w-32 justify-around items-center p-2 m-1'>
                  <FaMinusSquare
                    onClick={() => console.log('do nothing atm')}
                    size='1.25em'
                    className='hover:bg-yellow-300'
                    id='minus'
                  />
                  <button>Qty {1}</button>
                  <FaPlusSquare
                    onClick={() => console.log('do nothing atm')}
                    size='1.25em'
                    className='hover:bg-yellow-300'
                    id='add'
                  />
                </div>
              </div>
            </div>
          );
        })}
        <div className='flex items-center px-6 mb-6 w-full md:justify-end'>
          <div className='font-bold mx-6'>{`Total Price ${cartPrice}`}</div>
          <button className='bg-gray-700 text-white font-bold rounded p-2 m-2 w-28 self-center border-2 border-gray-700 hover:border-yellow-300 hover:text-yellow-300'>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
