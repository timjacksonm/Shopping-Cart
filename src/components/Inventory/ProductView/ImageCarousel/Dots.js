import React from 'react';

function Dots(props) {
  const dotStyle = 'border-4 rounded-full mx-6 border-gray';
  const dotStyleSelected = 'border-4 rounded-full mx-6 border-black';
  return (
    <div className='absolute bottom-0 w-full my-2'>
      <div className='flex justify-center'>
        <button
          className={props.imageSelected === 1 ? dotStyleSelected : dotStyle}
        ></button>
        <button
          className={props.imageSelected === 2 ? dotStyleSelected : dotStyle}
        ></button>
        <button
          className={props.imageSelected === 3 ? dotStyleSelected : dotStyle}
        ></button>
      </div>
    </div>
  );
}

export default Dots;
