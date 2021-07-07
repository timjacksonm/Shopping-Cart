import React, { useState } from 'react';
import Arrows from './Arrows';
import Dots from './Dots';
import SliderContent from './SliderContent';

function ImageCarousel(props) {
  const [imageCount, setImageCount] = useState(1);
  // const [imageTransition, setStyles] = useState('flex w-full');

  const nextImageBtn = () => {};
  return (
    <div className='w-2/3 overflow-hidden'>
      <SliderContent itemData={props.itemData} />
      <Arrows />
      <Dots itemData={props.itemData} />
    </div>
  );
}

export default ImageCarousel;
