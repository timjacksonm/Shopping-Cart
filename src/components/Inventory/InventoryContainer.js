import React from 'react';

export default function InventoryContainer(props) {
  return (
    <div className='flex flex-grow flex-wrap py-20 justify-center bg-gray-300 bg-opacity-75'>
      {props.inventory.map(
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
              onClick={() => {
                console.log(id);
              }}
            >
              <img
                className='p-4 border-t-2 md:border-t-0 cursor-pointer'
                src={previewImage}
                alt=''
                height='220px'
                width='220px'
              />
              <div>
                <div className='font-bold text-left hover:text-yellow-300 flex justify-between'>
                  <div>{brand}</div>
                  <div className='text-yellow-300'>{price}</div>
                </div>
                <div className='text-sm text-left break-words pb-2 w-44 hover:text-yellow-300'>
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
