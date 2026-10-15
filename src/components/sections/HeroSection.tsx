import React from 'react';
import { Navbar } from './Navbar';
import { FadeIn } from '../common/FadeIn';
import { Magnet } from '../common/Magnet';
import { ContactButton } from '../common/ContactButton';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C]">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero Heading: "Hi, I'm Maxime" */}
      <div className="w-full overflow-hidden text-center z-0 px-2 sm:px-4 mb-auto mt-1 sm:mt-2 md:mt-3">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[12.5vw] sm:text-[13vw] md:text-[14vw] lg:text-[15vw] -mt-1 sm:-mt-3 md:-mt-5 select-none">
            Hi, I&apos;m Maxime
          </h1>
        </FadeIn>
      </div>

      {/* 3. Hero Portrait with Magnet Mouse-Following effect */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] aspect-[4/5] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto">
        <FadeIn delay={0.6} y={30} className="w-full h-full flex justify-center">
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full h-full"
          >
            <div className="w-full h-full relative group flex items-end justify-center">
              <img
                src="/images/profile.png"
                alt="Maxime Haguet"
                draggable={false}
                className="w-full h-full object-contain object-bottom select-none transition-transform duration-500 group-hover:scale-105 filter drop-shadow-[0_25px_40px_rgba(0,0,0,0.9)]"
              />
            </div>
          </Magnet>
        </FadeIn>
      </div>

      {/* 4. Bottom bar */}
      <div className="relative z-20 flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 w-full">
        {/* Left paragraph */}
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            engineering apprentice focused on cybersecurity, data and ai
          </p>
        </FadeIn>

        {/* Right Contact button: mailto:maxime.haguet@gmail.com */}
        <FadeIn delay={0.5} y={20}>
          <ContactButton label="Contact Me" href="mailto:maxime.haguet@gmail.com" />
        </FadeIn>
      </div>
    </section>
  );
};
