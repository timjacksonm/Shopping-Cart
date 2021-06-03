import React from 'react';
import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';

function NavBar() {
  return (
    <div className='w-screen m-0 p-0 fixed text-white'>
      <Navigation />
      <MobileNavigation />
    </div>
  );
}
export default NavBar;
