import React, { useState } from 'react';
import Arrows from './Arrows';
import Dots from './Dots';
import SliderContent from './SliderContent';

function ImageCarousel(props) {
  const [imageSelected, setImageSelected] = useState(1);
  const [imageStyle, setImageStyle] = useState(
    'flex translate-x-0 transition-transform duration-500 ease-in-out'
  );
  return (
    <div className='relative w-80 h-80 mx-auto my-4 overflow-hidden max-w-md rounded lg:w-auto lg:h-auto'>
      <SliderContent itemData={props.itemData} imageStyle={imageStyle} />
      <Arrows
        imageStyle={imageStyle}
        setImageStyle={setImageStyle}
        imageSelected={imageSelected}
        setImageSelected={setImageSelected}
      />
      <Dots itemData={props.itemData} imageSelected={imageSelected} />
    </div>
  );
}

export default ImageCarousel;
