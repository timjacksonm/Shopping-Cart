import React, { useState } from 'react';

function SliderContent(props) {
  // console.log(props.gallery
  return (
    <>
      <div className={props.imageStyle}>
        {props.itemData.gallery.map((image) => (
          <img
            src={image}
            alt='asdf'
            className='w-80 h-80 max-w-md lg:w-auto lg:h-auto'
          />
        ))}
      </div>
    </>
  );
}

export default SliderContent;
