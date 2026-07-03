import React from 'react';
import ContactHero from '../features/contact/components/ContactHero';
import ContactDetails from '../features/contact/components/ContactDetails';
import ContactForm from '../features/contact/components/ContactForm';
import ContactMap from '../features/contact/components/ContactMap';

const Contact = () => {
  return (
    <>
      <ContactHero />
      <ContactDetails />
      <ContactForm />
      <ContactMap />
    </>
  );
};

export default Contact;
