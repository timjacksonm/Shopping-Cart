import React from 'react';
import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';

function NavBar(props) {
  console.log(props);
  return (
    <div className='w-screen m-0 p-0 fixed text-white'>
      <Navigation cartPrice={props.cartPrice} />
      <MobileNavigation cartPrice={props.cartPrice} />
    </div>
  );
}
export default NavBar;
