import React, { useState } from 'react';

function SliderContent(props) {
  const [styles, setStyles] = useState('flex w-full');
  const testBtn = () => {
    if (styles === 'flex w-full') {
      setStyles(
        'flex w-full h-96 transform -translate-x-full transition-transform duration-500 ease-in-out'
      );
      return;
    }
    if (
      styles ===
      'flex w-full h-96 transform -translate-x-full transition-transform duration-500 ease-in-out'
    ) {
      setStyles(
        'flex w-full h-96 transform translate-x-fullx1 transition-transform duration-500 ease-in-out'
      );
      return;
    }
    setStyles('flex w-full');
    return;
  };
  return (
    <div>
      <div className={styles}>
        {props.itemData.gallery.map((image) => (
          <img src={image} alt='asdf' className='w-full' />
        ))}
      </div>
      <button onClick={testBtn} className='absolute'>
        CLICK ME TO MOVE IMAGE
      </button>
    </div>
  );
}

export default SliderContent;
