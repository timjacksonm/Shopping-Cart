import React from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

function Arrows(props) {
  const arrowNext = () => {
    switch (props.imageSelected) {
      case 1:
        props.setImageStyle(
          'flex w-96 h-96 transform -translate-x-full transition-transform duration-500 ease-in-out'
        );
        props.setImageSelected(2);
        break;
      case 2:
        props.setImageStyle(
          'flex w-96 h-96 transform translate-x-fullx1 transition-transform duration-500 ease-in-out'
        );
        props.setImageSelected(3);
        break;
      default:
        props.setImageStyle(
          'flex w-96 h-96 translate-x-0 transition-transform duration-500 ease-in-out'
        );
        props.setImageSelected(1);
        break;
    }
  };
  const arrowPrev = () => {
    switch (props.imageSelected) {
      case 1:
        props.setImageStyle(
          'flex w-96 h-96 transform translate-x-fullx1 transition-transform duration-500 ease-in-out'
        );
        props.setImageSelected(3);
        break;
      case 2:
        props.setImageStyle(
          'flex w-96 h-96 translate-x-0 transition-transform duration-500 ease-in-out'
        );
        props.setImageSelected(1);
        break;
      default:
        props.setImageStyle(
          'flex w-96 h-96 transform -translate-x-full transition-transform duration-500 ease-in-out'
        );
        props.setImageSelected(2);
        break;
    }
  };
  return (
    <div className='opacity-75 w-full hover:opacity-100'>
      <button id='next' className='absolute top-1/2 left-0' onClick={arrowPrev}>
        <FaAngleLeft size='2.5em' />
      </button>
      <button
        id='prev'
        className='absolute top-1/2 right-0'
        onClick={arrowNext}
      >
        <FaAngleRight size='2.5em' />
      </button>
    </div>
  );
}

export default Arrows;
