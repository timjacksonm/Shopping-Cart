import React, { useState } from 'react';

function SliderContent(props) {
  return (
    <div>
      <div className={props.imageStyle}>
        {props.itemData.gallery.map((image) => (
          <img src={image} alt='asdf' className='' />
        ))}
      </div>
    </div>
  );
}

export default SliderContent;
