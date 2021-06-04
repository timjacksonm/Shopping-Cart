import React from 'react';
import Nav from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import hammers from '../Inventory/Hammers';
import circularSaws from '../Inventory/Saws';

export default function Shop() {
  console.log(hammers);
  return (
    <div className='flex flex-col text-center h-screen bg-default-pattern bg-cover overflow-auto items-center'>
      <Nav />
      <main className='flex flex-grow justify-center items-center'>
        {hammers.map(
          ({ category, id, brand, name, price, description, previewImage }) => {
            return (
              <div>
                <img src={previewImage} alt='' />
              </div>
            );
          }
        )}
      </main>
      <Footer />
    </div>
  );
}
