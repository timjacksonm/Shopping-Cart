import React, { useState } from 'react';

function SliderContent(props) {
  const [styles, setStyles] = useState('flex w-full');
  const testBtn = () => {
    if (styles === 'flex w-full') {
      setStyles(
        'flex w-full h-96 transform -translate-x-full transition-transform duration-500 ease-in-out'
      );
    } else {
      setStyles('flex w-full');
    }
  };
  return (
    <div className={styles}>
      {props.itemData.gallery.map((image) => (
        <img src={image} alt='asdf' className='w-full' />
      ))}
      <button onClick={testBtn} className='absolute top-0 right-0 h-48'>
        CLICK ME TO MOVE IMAGE
      </button>
    </div>
  );
}

export default SliderContent;
