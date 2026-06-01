import React from 'react';
import Container from '../../ui/Container';
import { Link } from 'react-router-dom';
import { assets } from '../../../assets/data/assets';
import Button from '../../ui/Button';
import { ArrowRight } from 'lucide-react';
import FooterColumn from './FooterColumn';
import { footerLinks } from './footerLinks';

const Footer = () => {
  return (
    <footer className="bg-primary w-full border-t text-gray-300">
      <Container>
        {/* Top Footer */}
        <section className="grid grid-cols-1 py-8 lg:grid-cols-[1fr_2fr] lg:py-12">
          {/* Left Section */}
          <div className="border-b border-[#CAC9CF] pb-10 lg:border-r lg:border-b-0 lg:pr-20 lg:pb-0">
            {/* Logo */}
            <Link to="/" aria-label="Go to homepage" className="inline-block">
              <img src={assets.footer_logo} alt="Brand Logo" className="w-36" />
            </Link>

            {/* Description */}
            <p className="mt-4.5 max-w-xs text-sm leading-6 font-normal text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
              mauris sed ma
            </p>

            {/* CTA */}
            <Link>
              <Button
                variant="outlineLight"
                size="md"
                icon={ArrowRight}
                className="mt-8"
              >
                Get Started
              </Button>
            </Link>
          </div>

          {/* Right Section */}
          <nav
            aria-label="Footer Navigation"
            className="grid grid-cols-2 gap-18 pt-10 sm:grid-cols-3 lg:pt-0 lg:pl-20"
          >
            {footerLinks.map((section) => (
              <FooterColumn
                key={section.title}
                title={section.title}
                links={section.links}
              />
            ))}
          </nav>
        </section>

        {/* Bottom Divider */}
        <div className="border-t border-[#CAC9CF]">
          {/* Bottom Fotter */}
          <section className="flex flex-col items-center justify-center gap-3 py-8 lg:flex-row">
            {/* Copyright */}
            <p className="flex flex-col items-center text-center text-base leading-5.5 font-normal tracking-normal text-[#A6A6A8] sm:flex-row sm:gap-1">
              <span>Copyright © 2023 Moon</span>

              {/* Divider only above 480px */}
              <span className="hidden sm:inline">|</span>

              <span>All Rights Reserved</span>

              {/* Last divider only above 480px */}
              <span className="hidden sm:inline">|</span>
            </p>

            {/* Legal Links */}
            <nav
              aria-label="Legal navigation"
              className="flex flex-col items-center justify-center gap-2 text-center text-base font-normal text-[#807F86] underline decoration-solid decoration-1 underline-offset-2 sm:flex-row sm:gap-3"
            >
              <Link
                to="/terms-and-conditions"
                className="text-gray-300 transition-colors hover:text-white focus:ring-2 focus:outline-none"
              >
                Terms and Conditions
              </Link>
              <span className="hidden text-white sm:inline">|</span>
              <Link
                to="/privacy-policy"
                className="text-gray-300 transition-colors hover:text-white"
              >
                Privacy and Policy
              </Link>
            </nav>
          </section>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
