import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import InventoryContainer from '../Inventory/InventoryContainer';
import ItemExpanded from '../Inventory/ItemExpanded';

export default function Shop() {
  const [itemSelected, setItemSelected] = useState(false);
  const [item, setItem] = useState(null);

  const [cart, setCart] = useState(null);
  const [cartPrice, setCartPrice] = useState();

  const clickHandler = (event, itemArray) => {
    setItem(...itemArray.filter((item) => item.id === event.target.id));
    setItemSelected(true);
  };

  const closeBtn = () => setItemSelected(false);

  const addToCartBtn = (e) => {
    if (cart !== null) {
      setCart((prevState) => {
        if (prevState.length > 1) {
          return [...prevState, item];
        }
        return [prevState, item];
      });
      return;
    }
    setCart(item);
    setCartPrice([item.price]);
  };

  useEffect(() => {
    if (cart !== null && cart.length >= 2) {
      let price = cart
        .map((item) => item.price)
        .reduce((a, b) => Number(a) + Number(b))
        .toFixed(2);
      setCartPrice(`$${price}`);
      return;
    }
    if (cart !== null) {
      setCartPrice(`$${cart.price}`);
    }
    return () => {};
  }, [cartPrice, cart]);

  return (
    <div className='relative flex flex-col flex-wrap text-center bg-default-pattern bg-cover overflow-auto items-center'>
      <NavBar cartPrice={cartPrice} />
      {itemSelected && (
        <ItemExpanded
          item={item}
          closeWindow={closeBtn}
          addToCart={addToCartBtn}
        />
      )}
      <InventoryContainer selectItem={clickHandler} />
    </div>
  );
}
