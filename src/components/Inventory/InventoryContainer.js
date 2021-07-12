import React, { useEffect } from 'react';
import hammers from '../Inventory/Hammers';
import circularSaws from '../Inventory/Saws';
import toolbags from '../Inventory/Toolbags';
import drills from '../Inventory/Drills';

export default function InventoryContainer(props) {
  const inventory = [...hammers, ...circularSaws, ...toolbags, ...drills];

  useEffect(() => {
    //On clicking an item from inventory. Scroll window to Top.
    window.scrollTo(0, 0);
  }, [props.selectItemState]);

  return (
    <div className='flex flex-grow flex-wrap py-20 justify-center bg-gray-800 bg-opacity-70'>
      {inventory.map(({ id, brand, name, price, previewImage }) => {
        return (
          <button
            key={id}
            className='flex flex-col items-center w-64 m-2 bg-white bg-opacity-80 rounded md:border-2'
            id={id}
            onClick={(e) => props.selectItem(e, inventory)}
          >
            <img
              className='p-4 border-t-2 md:border-t-0 cursor-pointer'
              src={previewImage}
              alt={name}
              height='220px'
              width='220px'
              id={id}
            />
            <div>
              <div
                id={id}
                className='font-bold text-left hover:text-yellow-300 flex justify-between'
              >
                <div id={id}>{brand}</div>
                <div id={id} className='text-blue-800'>
                  {`$${price}`}
                </div>
              </div>
              <div
                id={id}
                className='text-sm text-left break-words pb-2 w-44 hover:text-yellow-300'
              >
                {name}
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
