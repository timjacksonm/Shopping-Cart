import React from 'react';
import hammers from '../Inventory/Hammers';
import circularSaws from '../Inventory/Saws';
import toolbags from '../Inventory/Toolbags';
import drills from '../Inventory/Drills';

export default function InventoryContainer(props) {
  const inventory = [...hammers, ...circularSaws, ...toolbags, ...drills];
  return (
    <div className='flex flex-grow flex-wrap py-20 justify-center bg-gray-300 bg-opacity-75'>
      {inventory.map(
        ({
          category,
          id,
          brand,
          name,
          price,
          description,
          previewImage,
          gallery,
        }) => {
          return (
            <button
              key={id}
              className='flex flex-col items-center w-64 md:border-2 m-2'
              id={id}
              onClick={(e) => props.selectItem(e, inventory)}
            >
              <img
                className='p-4 border-t-2 md:border-t-0 cursor-pointer'
                src={previewImage}
                alt=''
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
                  <div id={id} className='text-yellow-300'>
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
        }
      )}
    </div>
  );
}
