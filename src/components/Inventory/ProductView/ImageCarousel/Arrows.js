import React from 'react';

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
    <div className='absolute'>
      <button id='next' className='' onClick={arrowPrev}>
        Prev
      </button>
      <button id='prev' className='' onClick={arrowNext}>
        Next
      </button>
    </div>
  );
}

export default Arrows;
