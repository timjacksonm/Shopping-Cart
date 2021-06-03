import React from 'react';
import Footer from '../Footer/Footer';
import Nav from '../NavBar/NavBar';
import PhotoLeft from '../../assets/painting.jpeg';
import PhotoRight from '../../assets/workshop.jpeg';
import Logo from '../../assets/Timberland Tools.png';

function Home() {
  return (
    <div className='flex flex-col text-center h-screen bg-default-pattern bg-cover overflow-auto items-center'>
      <Nav />
      <img className='mt-28 mb-8 max-w-max' src={Logo} alt='' width='35%' />
      <main className='flex-grow p-5 bg-gray-800 text-white flex flex-col max-w-screen-lg self-center'>
        <h1 className='text-yellow-300 font-bold m-5 z-20 md:text-xl'>
          About Us
        </h1>
        <div className='flex flex-col items-center justify-between md:flex-row'>
          <img className='m-3 z-0 w-3/4 md:w-2/6' src={PhotoLeft} alt='' />
          <p className='m-5 md:text-lg'>
            Eu culpa do ut fugiat magna incididunt non Lorem. Pariatur velit qui
            tempor cillum reprehenderit. Irure nisi Lorem cupidatat irure. Ea
            commodo reprehenderit nulla tempor. In pariatur nulla aliquip qui
            deserunt. Et esse dolore anim id consectetur amet. Minim in irure et
            do ad sit proident cillum aliquip nulla amet velit tempor eiusmod.
            Cupidatat eu esse aliqua dolor deserunt ex magna ullamco laboris
            anim culpa. Duis excepteur commodo ut cillum nulla elit Lorem enim
            enim amet ut. Irure laboris ea est veniam dolore non do aliquip
            nisi. Ullamco cillum dolor incididunt qui veniam id adipisicing eu
            elit. Consectetur officia tempor et non veniam culpa ex non nisi
            laborum minim ex id. Deserunt mollit dolor eu nostrud est cupidatat.
          </p>
        </div>
        <div className='flex flex-col justify-between md:flex-row'>
          <p className='m-5 md:text-lg'>
            Aliquip in mollit non ad amet nisi ad ipsum. Magna ullamco magna
            enim consequat ipsum elit minim deserunt adipisicing ad occaecat.
            Nisi veniam sint proident officia consequat anim. Labore aliquip
            ipsum laborum ut id irure in veniam quis nisi magna nostrud fugiat
            proident. Mollit sit consectetur laborum Lorem qui Lorem enim
            proident. Dolore elit laborum proident laborum id dolor nisi sunt
            sit. Nisi dolore amet tempor qui. Voluptate do velit tempor
            incididunt ea sunt exercitation nisi sint. Aute ex mollit sit
            nostrud consequat ex mollit id proident duis labore.
          </p>
          <img className='m-3 z-0 md:w-1/2' src={PhotoRight} alt='' />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
