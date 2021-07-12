import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

function SocialMedia() {
  return (
    <div className='flex justify-around text-white'>
      <div className='font-bold'>{'Follow us on Social Media!'}</div>
      <a
        href='https://github.com/timjacksonm'
        className='hover:text-yellow-300'
      >
        <FaTwitter size='1.5rem' />
      </a>
      <a
        href='https://github.com/timjacksonm'
        className='hover:text-yellow-300'
      >
        <FaInstagram size='1.5rem' />
      </a>
      <a
        href='https://github.com/timjacksonm'
        className='hover:text-yellow-300'
      >
        <FaFacebook size='1.5rem' />
      </a>
    </div>
  );
}

export default SocialMedia;
