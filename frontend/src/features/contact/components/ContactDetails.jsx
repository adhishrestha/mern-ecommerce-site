import React from 'react';
import Container from '../../../components/ui/Container';
import SectionHeader from '../../../components/shared/SectionHeader';

const ContactDetails = () => {
  return (
    <section
      aria-label="Business Contact Information"
      className="bg-white py-12"
    >
      <Container>
        <div className="mx-auto max-w-lg px-4 pb-12.5 text-center sm:px-6">
          <SectionHeader
            title="Get in touch with us"
            className="text-3xl md:text-4xl"
          />
          <p className="mt-6 text-center text-base leading-6 font-normal text-[#5A5A5A]">
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
            phasellus mollis sit aliquam sit nullam.
          </p>
        </div>

        <address className="flex flex-col items-center space-y-8 text-center font-sans text-sm tracking-[0.15em] not-italic">
          <div className="flex flex-col items-center">
            <span className="mb-3 font-semibold text-[#2D323E]">
              Office Hours :
            </span>
            <span className="font-medium text-[#C69B7B]">
              Monday - Friday 8:00 am to 5:00 pm
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="mb-3 font-semibold text-[#595667]">Email:</span>
            <a
              href="mailto:contact@company.com"
              className="font-medium tracking-normal text-[#C69B7B] lowercase transition-colors hover:text-[#a68a64]"
            >
              contact@company.com
            </a>
          </div>
          <div className="flex flex-col items-center">
            <span className="mb-3 font-semibold text-[#595667]">Phone :</span>
            <a
              href="tel:+14146875892"
              className="font-medium tracking-normal text-[#C69B7B] transition-colors hover:text-[#a68a64]"
            >
              (414) 687 - 5892
            </a>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="mb-3 font-semibold text-[#595667]">
              Location :
            </span>
            <span className="leading-loose font-medium text-[#C69B7B]">
              59 Middle Point Rd
              <br />
              San Francisco, 80412
            </span>
          </div>
        </address>
      </Container>
    </section>
  );
};

export default ContactDetails;
