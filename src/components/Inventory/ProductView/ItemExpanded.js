import React from 'react';
import ImageCarousel from './ImageCarousel/ImageCarousel';
import { FaWindowClose, FaPlusSquare, FaMinusSquare } from 'react-icons/fa';

export default function itemExpanded(props) {
  const handleClick = (e) => {
    if (e.target.id === 'add' || e.target.parentElement.id === 'add') {
      props.setQuanity((prevState) => ++prevState);
      return;
    }
    props.setQuanity((prevState) => --prevState);
  };
  return (
    <div className='flex absolute top-20 bg-gray-600 bg-opacity-30 w-full h-full md:fixed md:justify-center'>
      <div className='flex flex-col items-center h-1/6 bg-gray-600 overflow-hidden relative rounded py-auto md:justify-around md:w-auto md:m-10 md:h-4/6 xl:h-5/6 lg:max-w-5xl'>
        <div className='w-full py-5'>
          <FaWindowClose
            onClick={props.closeWindow}
            className='absolute right-5 top-2 md:top-5 hover:bg-yellow-300'
            size='1.5em'
          />
        </div>
        <div className='text-lg font-bold'>{props.item.brand}</div>
        <div className='text-xl text-yellow-300'>{`$${props.item.price}`}</div>
        <div className='text-white px-1'>{props.item.name}</div>
        <div className='flex flex-col items-center justify-center md:flex-row'>
          <div className='flex flex-col md:flex-row'>
            <ImageCarousel itemData={props.item} />
            <ul className='flex flex-col text-left w-2/5 self-center text-white text-sm list-inside md:text-base lg:list-disc md:p-2'>
              {props.item.description.map((bulletPoint) => (
                <li key={bulletPoint} className='pt-1'>
                  {bulletPoint}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='flex w-32 justify-around items-center p-2 m-1'>
          <FaMinusSquare
            onClick={handleClick}
            size='1.25em'
            className='hover:bg-yellow-300'
            id='minus'
          />
          <button>Qty {props.quanity}</button>
          <FaPlusSquare
            onClick={handleClick}
            size='1.25em'
            className='hover:bg-yellow-300'
            id='add'
          />
        </div>
        <button
          onClick={props.addToCart}
          className='border-2 p-2 m-4 rounded-lg text-yellow-300 font-bold hover:bg-yellow-300 hover:text-black hover:border-black'
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
