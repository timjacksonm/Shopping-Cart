import React from 'react';

function SliderContent(props) {
  return (
    <div className={props.imageStyle}>
      {props.itemData.gallery.map((image) => (
        <img
          src={image}
          alt={`Shop Item ${props.itemData.brand} ${props.itemData.category}`}
          key={image}
          className='w-80 h-80 max-w-md lg:w-auto lg:h-auto'
        />
      ))}
    </div>
  );
}

export default SliderContent;
