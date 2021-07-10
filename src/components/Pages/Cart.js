import React from 'react';
import Storage from '../LocalStorage/LocalStorage';

function Cart() {
  const Data = Storage.retrieveData();

  return (
    <div>
      {Data.map((item) => (
        <div>{item.id}</div>
      ))}
    </div>
  );
}

export default Cart;
