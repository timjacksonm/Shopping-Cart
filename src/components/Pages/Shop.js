import React, { useState } from 'react';
import Nav from '../NavBar/NavBar';
import InventoryContainer from '../Inventory/InventoryContainer';
import itemExpanded from '../Inventory/itemExpanded';
import hammers from '../Inventory/Hammers';
import circularSaws from '../Inventory/Saws';
import toolbags from '../Inventory/Toolbags';
import drills from '../Inventory/Drills';

export default function Shop() {
  const [itemSelected, setItemSelected] = useState(false);
  const inventory = [...hammers, ...circularSaws, ...toolbags, ...drills];

  const clickHandler = (e) => {
    console.log('test');
  };
  return (
    <div className='flex flex-col flex-wrap text-center bg-default-pattern bg-cover overflow-auto items-center'>
      <Nav />
      <main>
        {itemSelected ? (
          <itemExpanded />
        ) : (
          <InventoryContainer inventory={inventory} />
        )}
      </main>
    </div>
  );
}
