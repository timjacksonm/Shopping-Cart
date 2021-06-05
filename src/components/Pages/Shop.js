import React from 'react';
import Nav from '../NavBar/NavBar';
import hammers from '../Inventory/Hammers';
import circularSaws from '../Inventory/Saws';
import toolbags from '../Inventory/Toolbags';
import drills from '../Inventory/Drills';

export default function Shop() {
  const inventory = [...hammers, ...circularSaws, ...toolbags, ...drills];
  return (
    <div className='flex flex-col flex-wrap text-center bg-default-pattern bg-cover overflow-auto items-center'>
      <Nav />
      <main className='flex flex-grow flex-wrap py-20 justify-center bg-gray-300 bg-opacity-75'>
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
              <div
                key={id}
                className='flex flex-col items-center w-64 md:border-2 m-2'
              >
                <img
                  className='p-4 border-t-2 md:border-t-0 cursor-pointer'
                  src={previewImage}
                  alt=''
                  height='220px'
                  width='220px'
                  onClick={() => console.log('test')}
                />
                <button onClick={() => console.log('test')}>
                  <div className='font-bold text-left hover:text-yellow-300'>
                    {brand}
                  </div>
                  <div className='text-sm text-left break-words pb-2 w-44 hover:text-yellow-300'>
                    {name}
                  </div>
                </button>
              </div>
            );
          }
        )}
      </main>
    </div>
  );
}
