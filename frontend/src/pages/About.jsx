import React from 'react';
import Container from '../components/ui/Container';
import SectionHeader from '../components/shared/SectionHeader';
import SplitSection from '../components/shared/SplitSection';
import { assets } from '../assets/data/assets';
import { TIMELINE_DATA, PROCESS_DATA, TEAM_DATA } from '../data/aboutData';
import CarouselSection from '../components/shared/CarouselSection';
import TeamMemberCard from '../components/cards/TeamMemberCard';
import NewsletterSection from '../features/home/sections/NewsLetterSection';

const About = () => {
  const data = PROCESS_DATA;
  return (
    <Container>
      <header className="mx-auto max-w-lg px-4 py-16 text-center sm:px-6">
        <SectionHeader title="About Moon" className="md:text-4xl" as="h1" />
        <p className="mt-6 text-center text-base leading-6 font-normal text-[#5A5A5A]">
          Moon's handmade ceramic products have been around since 1650, let's
          explore our journey
        </p>
      </header>

      {/* History Section */}
      <section aria-label="Our History">
        {TIMELINE_DATA.map((item) => (
          <SplitSection
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            imageAlt={item.imageAlt}
            mobileContentFirst={false}
            reverse={item.reverse}
          />
        ))}
      </section>

      {/* Process Section : How We Work */}
      <section
        className="flex flex-col overflow-hidden py-20 lg:flex-row"
        aria-labelledby="process-heading"
      >
        {/* Image Side */}
        <div className="relative aspect-4/3 min-h-100 flex-1 lg:aspect-auto">
          <img
            src={data.featuredImage}
            alt={data.imageAlt}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Content Side */}
        <div className="flex flex-1 items-center bg-[#F7F6F5] py-8 lg:justify-center lg:py-12">
          <div className="px-6 lg:max-w-md lg:px-8">
            <h2
              id="process-heading"
              className="mb-8 font-serif text-2xl leading-8 font-bold tracking-[0.04em] text-[#3A3845] uppercase md:text-[28px]"
            >
              How We Work
            </h2>

            <div className="space-y-6">
              {PROCESS_DATA.steps.map((step) => (
                <article key={step.id}>
                  <h3 className="mb-4 font-sans text-lg leading-6 font-semibold text-[#3A3845]">
                    {step.title}
                  </h3>
                  <p className="text-base leading-6 text-[#5A5A5A]">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/*Meet Our Team Section  */}
      <section>
        <div className="mb-12">
          <SectionHeader title="Meet Our Team" />
        </div>
        <div>
          <CarouselSection
            items={TEAM_DATA}
            renderItem={(member) => <TeamMemberCard member={member} />}
          />
        </div>
      </section>

      {/* NewsLetter Section */}
      <NewsletterSection />
    </Container>
  );
};

export default About;
