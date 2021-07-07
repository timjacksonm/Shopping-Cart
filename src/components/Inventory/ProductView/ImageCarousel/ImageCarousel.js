import React, { useState } from 'react';
import Arrows from './Arrows';
import Dots from './Dots';
import SliderContent from './SliderContent';

function ImageCarousel(props) {
  const [imageSelected, setImageSelected] = useState(1);
  const [imageStyle, setImageStyle] = useState(
    'flex w-96 h-96 translate-x-0 transition-transform duration-500 ease-in-out'
  );

  const nextImageBtn = () => {};
  return (
    <div className='w-96 h-96 overflow-hidden'>
      <SliderContent itemData={props.itemData} imageStyle={imageStyle} />
      <Arrows
        imageStyle={imageStyle}
        setImageStyle={setImageStyle}
        imageSelected={imageSelected}
        setImageSelected={setImageSelected}
      />
      <Dots itemData={props.itemData} />
    </div>
  );
}

export default ImageCarousel;
