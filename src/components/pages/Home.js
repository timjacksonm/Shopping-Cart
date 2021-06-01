import React from 'react';
import Footer from './Footer';

function Home() {
  return (
    <div className='flex flex-col text-center h-screen'>
      <header className='bg-gray-600'>Title of Page</header>
      <main className='bg-blue-600 flex-grow'>Body of Page</main>
      <Footer />
    </div>
  );
}

export default Home;
