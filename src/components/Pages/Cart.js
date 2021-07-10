import React from 'react';
import Storage from '../LocalStorage/LocalStorage';
import NavBar from '../NavBar/NavBar';
import { FaPlusSquare, FaMinusSquare } from 'react-icons/fa';

function Cart() {
  const Data = Storage.retrieveData();

  return (
    <div>
      <NavBar cart={Data} />
      <div className='flex flex-col pt-20'>
        <div>Shopping Cart</div>
        {Data.map((item) => {
          return (
            <div key={item.id}>
              <div>{`${item.brand} ${item.name}`}</div>
              <div className='flex'>
                <img
                  height='100px'
                  width='100px'
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
                <button>Delete</button>
                <div>{`$${item.price}`}</div>
              </div>
            </div>
          );
        })}
        <button className='bg-blue-300 rounded p-2 m-2 w-1/6 self-center'>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
