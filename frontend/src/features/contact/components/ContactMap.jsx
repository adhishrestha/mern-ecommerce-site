import React from 'react';

const ContactMap = () => {
  return (
    <section
      className="h-125 w-full bg-gray-100"
      aria-label="Interactive Office Map Coordinates"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.618526798408!2d-122.09046711802013!3d37.42249056039277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02f1822489%3A0x37a9269fbae1c4f7!2sGoogle%20Building%2041%2C%201600%20Amphitheatre%20Pkwy%2C%20Mountain%20View%2C%20CA%2094043%2C%20USA!5e0!3m2!1sen!2snp!4v1783051814649!5m2!1sen!2snp"
        title="Moon Brand Headquarters Map Location"
        className="h-full w-full border-0"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </section>
  );
};

export default ContactMap;
