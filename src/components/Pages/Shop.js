import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import InventoryContainer from '../Inventory/InventoryContainer';
import ItemExpanded from '../Inventory/ItemExpanded';

export default function Shop() {
  const [itemSelected, setItemSelected] = useState(false);
  const [item, setItem] = useState(null);

  const [cart, setCart] = useState([]);
  const [cartPrice, setCartPrice] = useState();
  const [quanity, setQuanity] = useState(1);

  const clickHandler = (event, itemArray) => {
    setItem(...itemArray.filter((item) => item.id === event.target.id));
    setItemSelected(true);
  };

  const closeBtn = () => setItemSelected(false);

  const addToCartBtn = (e) => {
    const qtyAddItem = [];
    for (let i = 0; i < quanity; i++) {
      qtyAddItem.push(item);
    }
    if (cart.length > 0) {
      setCart((prevState) => {
        if (prevState.length > 1) {
          return [...prevState, ...qtyAddItem];
        }
        return [...prevState, ...qtyAddItem];
      });
      setQuanity(1);
      closeBtn();
      return;
    }
    setCartPrice([item.price]);
    setCart(qtyAddItem);
    setQuanity(1);
    closeBtn();
  };

  useEffect(() => {
    if (cart.length >= 2) {
      let price = cart //Listens to when an item is added to cart and re-calculates the price that shows in navbar.
        .map((item) => item.price)
        .reduce((a, b) => Number(a) + Number(b))
        .toFixed(2);
      setCartPrice(`$${price}`);
      return;
    }
    if (cart.length === 1) {
      setCartPrice(`$${cart[0].price}`);
    }
    return () => {};
  }, [cartPrice, cart]);

  return (
    <div className='relative flex flex-col flex-wrap text-center bg-default-pattern bg-cover overflow-auto items-center'>
      <NavBar cartPrice={cartPrice} cart={cart} />
      {itemSelected && (
        <ItemExpanded
          item={item}
          closeWindow={closeBtn}
          addToCart={addToCartBtn}
          quanity={quanity}
          setQuanity={setQuanity}
        />
      )}
      <InventoryContainer selectItem={clickHandler} />
    </div>
  );
}
