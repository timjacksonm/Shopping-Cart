import React, { useState } from 'react';
import Nav from '../NavBar/NavBar';
import InventoryContainer from '../Inventory/InventoryContainer';
import ItemExpanded from '../Inventory/ItemExpanded';
import hammers from '../Inventory/Hammers';
import circularSaws from '../Inventory/Saws';
import toolbags from '../Inventory/Toolbags';
import drills from '../Inventory/Drills';

export default function Shop() {
  const [itemSelected, setItemSelected] = useState(false);
  const [Item, setItem] = useState(null);
  const inventory = [...hammers, ...circularSaws, ...toolbags, ...drills];

  const clickHandler = (e) => {
    setItem(...inventory.filter((item) => item.id === e.target.id));
    setItemSelected(true);
  };
  const closeBtn = () => setItemSelected(false);
  return (
    <div className='relative flex flex-col flex-wrap text-center bg-default-pattern bg-cover overflow-auto items-center'>
      <Nav />
      {itemSelected && <ItemExpanded Item={Item} closeWindow={closeBtn} />}
      <InventoryContainer inventory={inventory} clickHandler={clickHandler} />
    </div>
  );
}
