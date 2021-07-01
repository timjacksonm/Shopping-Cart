import React from 'react';
import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';

function NavBar(props) {
  return (
    <div className='w-screen m-0 p-0 fixed text-white'>
      <Navigation cartPrice={props.cartPrice} cart={props.cart} />
      <MobileNavigation cartPrice={props.cartPrice} cart={props.cart} />
    </div>
  );
}
export default NavBar;
