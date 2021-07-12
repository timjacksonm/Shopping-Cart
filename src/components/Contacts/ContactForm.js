import React, { useState } from 'react';

function ContactForm() {
  const [inputs, setInputs] = useState([]);

  const handleChange = (e) => {
    setInputs({ [e.target.name]: e.target.value });
  };
  return (
    <form className='flex flex-col items-center bg-gray-600 text-white my-2 p-4 text-wrap'>
      <div className='font-bold py-2 w-full'>{'Name:'}</div>
      <input
        onChange={handleChange}
        name='nameInput'
        className='p-2 w-full text-black'
        type='text'
        value={inputs.nameInput}
      />
      <div className='font-bold py-2 w-full'>{'Email:'}</div>
      <input
        onChange={handleChange}
        name='emailInput'
        className='p-2 w-full text-black'
        type='text'
        value={inputs.emailInput}
      />
      <div className='font-bold py-2 w-full'>{'Message:'}</div>
      <textarea
        onChange={handleChange}
        name='messageInput'
        className='p-2 h-60 w-full text-black'
        type='text'
        value={inputs.messageInput}
      ></textarea>
      <button
        onClick={(e) => {
          e.preventDefault();
          alert('Your message has been sent. We will get back too you soon!');
        }}
        className='border-2 w-24 p-2 m-4 mb-4 bg-gray-700 rounded-lg text-yellow-300 font-bold hover:bg-yellow-300 hover:text-black hover:border-black'
      >
        Submit
      </button>
      <div className='flex flex-col'>
        <a
          href='https://www.freepik.com/free-vector/geometric-background-memphis-style_7264761.htm#page=1&query=Graphics&position=1'
          target='_blank'
          rel='noreferrer'
          className='py-1 hover:text-yellow-300'
        >
          Background vector created by pikisuperstar - www.freepik.com
        </a>
        <a
          href='https://unsplash.com/photos/m4GbgHAWNCI'
          target='_blank'
          rel='noreferrer'
          className='py-1 hover:text-yellow-300'
        >
          Photo#1 by Roselyn Tirado on Unsplash - www.unsplash.com
        </a>
        <a
          href='https://unsplash.com/photos/Onty3BSYdGU'
          target='_blank'
          rel='noreferrer'
          className='py-1 hover:text-yellow-300'
        >
          Photo#2 by Brett Jordan on Unsplash - www.unsplash.com
        </a>
        <a
          href='https://www.lowes.com/'
          target='_blank'
          rel='noreferrer'
          className='py-1 hover:text-yellow-300'
        >
          Inventory photos & item price/details by Lowes - www.lowes.com
        </a>
      </div>
    </form>
  );
}

export default ContactForm;
