import React from 'react';

export default function itemExpanded(props) {
  console.log(props.Item);
  return (
    <div className='fixed flex justify-center bg-gray-600 bg-opacity-30 w-full h-full z-50 top-20'>
      <div className='fixed top-32 z-50 bg-gray-50 p-5 flex flex-col'>
        <div className='relative'>
          <button
            onClick={props.closeWindow}
            className='absolute top-0 right-0'
          >
            Close Button
          </button>
        </div>
        <div className='flex'>
          <div className='mt-20 w-96 h-96 bg-blue-500'>Image Carousel</div>
          {/* {props.Item.gallery.map((image) => (
            <img src={image} alt='asdf' width='150px' />
          ))} */}
          <div className='flex flex-col mt-20 bg-red-500 p-5 items-center'>
            <div className='text-3xl'>{props.Item.price}</div>
            <div>{props.Item.brand}</div>
            <div>{props.Item.name}</div>
            <ul className='mt-5 w-3/4 text-left list-disc'>
              {props.Item.description.map((bulletPoint) => (
                <li>{bulletPoint}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className='flex self-center mt-5 w-48 bg-green-500 justify-around m-2 p-2'>
          <button>-</button>
          <button>Qty {1}</button>
          <button>+</button>
        </div>
        <button className='flex self-center w-48 bg-green-500 justify-center m-2 p-2'>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
