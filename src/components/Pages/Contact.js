import React from 'react';
import Nav from '../NavBar/NavBar';
import ContactForm from '../Contacts/ContactForm';
import SocialMediaLinks from '../Contacts/SocialMedia';

export default function Contact() {
  return (
    <div className='flex flex-col items-center h-screen bg-default-pattern bg-cover'>
      <Nav />
      <div className='mt-20 py-4 h-4/5 rounded bg-gray-800 md:p-6 md:mt-28 lg:w-1/2 lg:h-auto'>
        <SocialMediaLinks />
        <ContactForm />
      </div>
    </div>
  );
}
