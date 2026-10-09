import React from 'react';
import { FadeIn } from '../common/FadeIn';
import { ContactButton } from '../common/ContactButton';
import { Linkedin, Github } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <footer
      id="contact"
      className="relative bg-[#0C0C0C] text-[#D7E2EA] py-24 sm:py-32 px-5 w-full flex flex-col items-center justify-center text-center"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Heading: "Let's talk" with .hero-heading, same heading size */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase tracking-tight leading-none text-center select-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Let&apos;s talk
          </h2>
        </FadeIn>

        {/* Short line under it in #D7E2EA, font-light, centered */}
        <FadeIn delay={0.15} y={20} className="mt-6 sm:mt-8">
          <p className="text-[#D7E2EA] font-light text-center text-base sm:text-lg md:text-xl tracking-wide max-w-xl">
            Open to an international internship from June to October 2027.
          </p>
        </FadeIn>

        {/* Action Buttons: ContactButton + LinkedIn + GitHub */}
        <FadeIn delay={0.3} y={20} className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <ContactButton label="Contact Me" href="mailto:maxime.haguet@gmail.com" />

          {/* LinkedIn Ghost Pill Button */}
          <a
            href="https://www.linkedin.com/in/maxime-haguet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors duration-200 select-none"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>

          {/* GitHub Ghost Pill Button */}
          <a
            href="https://github.com/haguetm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors duration-200 select-none"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </FadeIn>

        {/* Footer line at the bottom */}
        <div className="mt-24 sm:mt-32">
          <p className="text-[#D7E2EA] opacity-50 text-sm font-light tracking-wide">
            © 2026 Maxime Haguet
          </p>
        </div>
      </div>
    </footer>
  );
};
