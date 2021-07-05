import React from 'react';

function Arrows(props) {
  return (
    <div>
      <button id='prev' className='' onClick={props.prevSlide}></button>
      <button id='next' className='' onClick={props.nextSlide}></button>
    </div>
  );
}

export default Arrows;
