import React from 'react';
import Container from '../../components/ui/Container';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

const NewsletterSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="py-16 lg:py-20" aria-labelledby="newsletter-title">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          {/* Subtitle */}
          <p className="mb-6 text-base leading-5.5 font-semibold text-[#595667]">
            Sign Up For Emails
          </p>

          {/* Title */}
          <h2 className="mb-6 font-serif text-[28px] leading-9 font-bold text-[#3A3845] uppercase md:text-[32px]">
            For News, Collections & More
          </h2>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-6"
          >
            <div className="w-full max-w-[389px]">
              <label htmlFor="newsletter-email" className="sr-only">
                Email Address
              </label>
              <Input
                id="newsletter-email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Enter your email address"
                variant="underline"
                className="mb-8 text-center placeholder:text-[#595667]"
                required
              />
            </div>

            <Button type="submit" variant="outlineDark" size="md">
              Sign Up
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default NewsletterSection;
