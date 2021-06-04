import React from 'react';
import Nav from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import hammers from '../Inventory/Hammers';
import circularSaws from '../Inventory/Saws';
import toolbags from '../Inventory/Toolbags';
import drills from '../Inventory/Drills';

export default function Shop() {
  console.log(hammers);
  return (
    <div className='flex flex-col text-center h-screen bg-default-pattern bg-cover overflow-auto items-center'>
      <Nav />
      <main className='flex flex-grow justify-center items-center'>
        {drills.map(
          ({
            category,
            id,
            brand,
            name,
            price,
            description,
            previewImage,
            gallery,
          }) => {
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
