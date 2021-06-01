import React from 'react';
import Footer from './Footer';
import Nav from './Nav';

function Home() {
  return (
    <div className='flex flex-col text-center h-screen bg-default-pattern bg-cover'>
      <Nav />
      <main className='flex-grow'>Body of Page</main>
      <Footer />
    </div>
  );
}

export default Home;
