import React from 'react';

export default function itemExpanded(props) {
  console.log(props.Item);
  return (
    <div className=''>
      <div className='fixed inset-x-5 top-40 z-50  h-4/5 bg-gray-50'>
        <button>Close Button</button>
        <div>Image Carousel</div>
        {props.Item.gallery.map((image) => (
          <img src={image} alt='asdf' width='150px' />
        ))}
        <div>{props.Item.id}</div>
        <div>{props.Item.name}</div>
        <div>{props.Item.brand}</div>
        <div>{props.Item.category}</div>
        <div>{props.Item.price}</div>
        <ul>
          {props.Item.description.map((bulletPoint) => (
            <li>{bulletPoint}</li>
          ))}
        </ul>
        <button>-</button>
        <button>add to cart</button>
        <button>+</button>
      </div>
    </div>
  );
}
