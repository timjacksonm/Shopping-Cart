import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import InventoryContainer from '../Inventory/InventoryContainer';
import ItemExpanded from '../Inventory/ProductView/ItemExpanded';
import Storage from '../LocalStorage/LocalStorage';

export default function Shop() {
  const [itemSelected, setItemSelected] = useState(false); // t or f to display ItemExpanded component.
  const [item, setItem] = useState(null); //Current selection object. Used in displaying additional info in expanded item menu. Moved to cart if added.
  const [cart, setCart] = useState(
    localStorage.length === 0 ? [] : Storage.retrieveData()
  );
  const [quanity, setQuanity] = useState(1); //This state is for expanded item menu. Used when adding 1 or more of the same item to cart.

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
      setCart((prevState) => [...prevState, ...qtyAddItem]);
      setQuanity(1);
      closeBtn();
      return;
    }
    setCart(qtyAddItem);
    setQuanity(1);
    closeBtn();
  };

  return (
    <div className='relative flex flex-col flex-wrap text-center bg-default-pattern bg-cover overflow-auto items-center'>
      <NavBar cart={cart} />
      {itemSelected && (
        <ItemExpanded
          item={item}
          closeWindow={closeBtn}
          addToCart={addToCartBtn}
          quanity={quanity}
          setQuanity={setQuanity}
        />
      )}
      <InventoryContainer
        selectItemState={itemSelected}
        selectItem={clickHandler}
      />
    </div>
  );
}
