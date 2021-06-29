import React from 'react';
import { FaWindowClose, FaPlusSquare, FaMinusSquare } from 'react-icons/fa';

export default function itemExpanded(props) {
  console.log(props.Item);
  return (
    <div className='flex absolute top-20 bg-gray-600 bg-opacity-30 h-full w-full md:fixed md:justify-center'>
      <div className='flex flex-col items-center h-screen overflow-scroll bg-gray-600 relative py-5 md:justify-around md:p-4 md:w-1/2 md:m-10 md:h-4/6 md:rounded md:overflow-hidden xl:h-5/6'>
        <div className='w-full py-5'>
          <FaWindowClose
            onClick={props.closeWindow}
            className='absolute right-5 top-2 md:top-5 hover:bg-yellow-300'
            size='1.5em'
          />
        </div>
        <div className='text-lg font-bold'>{props.Item.brand}</div>
        <div className='text-xl text-yellow-300'>{props.Item.price}</div>
        <div className='text-white px-1'>{props.Item.name}</div>
        <div className='flex flex-col items-center justify-center md:flex-row'>
          <div className='flex flex-col md:flex-row'>
            <img
              src={props.Item.gallery[1]}
              alt='asdf'
              className='md:w-1/2 md:m-2 py-4'
            />
            {/* {props.Item.gallery.map((image) => (
            <img src={image} alt='asdf' width='' />
          ))} */}
            <ul className='flex flex-col text-left w-3/4 self-center text-white text-sm list-inside md:text-base lg:list-disc md:p-2'>
              {props.Item.description.map((bulletPoint) => (
                <li className='pt-1'>{bulletPoint}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className='flex w-32 justify-around items-center p-2 m-1'>
          <FaMinusSquare
            onClick={() => console.log('minus')}
            size='1.25em'
            className='hover:bg-yellow-300'
          />
          <button>Qty {1}</button>
          <FaPlusSquare
            onClick={() => console.log('add')}
            size='1.25em'
            className='hover:bg-yellow-300'
          />
        </div>
        <button className='border-2 p-2 m-1 rounded-lg text-yellow-300 font-bold hover:bg-yellow-300 hover:text-black hover:border-black'>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
