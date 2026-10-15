import React from 'react';
import { FadeIn } from '../common/FadeIn';
import { AnimatedText } from '../common/AnimatedText';
import { ContactButton } from '../common/ContactButton';

interface CornerTileProps {
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  src?: string;
  label: string;
}

const CornerTile: React.FC<CornerTileProps> = ({ icon: Icon, src, label }) => {
  return (
    <div className="w-full h-full flex items-center justify-center relative group transition-transform duration-300 hover:scale-110 select-none">
      {/* Colorful glowing aura around the logo */}
      <div className="absolute inset-0 m-auto w-3/4 h-3/4 rounded-full bg-gradient-to-tr from-[#7621B0]/35 via-[#B600A8]/30 to-[#00F0FF]/20 blur-2xl pointer-events-none group-hover:scale-125 group-hover:opacity-100 transition-all duration-500 opacity-80" />

      {src ? (
        <img
          src={src}
          alt={label}
          draggable={false}
          className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_0_25px_rgba(118,33,176,0.65)] drop-shadow-[0_0_50px_rgba(182,0,168,0.35)]"
        />
      ) : (
        Icon && (
          <Icon
            className="relative z-10 w-3/5 h-3/5 text-[#D7E2EA] filter drop-shadow-[0_0_20px_rgba(118,33,176,0.8)] drop-shadow-[0_0_40px_rgba(182,0,168,0.45)] transition-all duration-300 group-hover:scale-105 group-hover:text-white"
            strokeWidth={1.5}
          />
        )
      )}
    </div>
  );
};

export const AboutSection: React.FC = () => {
  const aboutText =
    'Software engineering apprentice at HighCo Data and fourth-year student at CESI. I work on cybersecurity, data and AI, and I build tools in C/C++ and Python, from network analysis to machine learning pipelines. I am looking for an international internship in summer 2027.';

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden bg-[#0C0C0C]"
    >
      {/* 1. Top-left slot */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] aspect-square z-10 pointer-events-auto">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="w-full h-full">
          <CornerTile src="/images/about-top-left.png" label="Mountains" />
        </FadeIn>
      </div>

      {/* 2. Bottom-left slot */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px] aspect-square z-10 pointer-events-auto">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="w-full h-full">
          <CornerTile src="/images/about-bottom-left.png" label="Photography" />
        </FadeIn>
      </div>

      {/* 3. Top-right slot */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] aspect-square z-10 pointer-events-auto">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="w-full h-full">
          <CornerTile src="/images/about-top-right.png" label="Artificial intelligence" />
        </FadeIn>
      </div>

      {/* 4. Bottom-right slot */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] aspect-square z-10 pointer-events-auto">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="w-full h-full">
          <CornerTile src="/images/about-bottom-right.png" label="Tennis" />
        </FadeIn>
      </div>

      {/* Center Content Container */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Heading: "About me" */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center select-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Gap between heading & text: gap-10 sm:gap-14 md:gap-16 */}
        <div className="h-10 sm:h-14 md:h-16" />

        {/* Animated paragraph */}
        <div className="max-w-[500px] sm:max-w-[540px] w-full mx-auto text-center px-4">
          <AnimatedText
            text={aboutText}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[500px] sm:max-w-[540px]"
          />
        </div>

        {/* Gap between text block and button: gap-16 sm:gap-20 md:gap-24 */}
        <div className="h-16 sm:h-20 md:h-24" />

        {/* Contact button below */}
        <FadeIn delay={0.2} y={20}>
          <ContactButton label="Contact Me" href="mailto:maxime.haguet@gmail.com" />
        </FadeIn>
      </div>
    </section>
  );
};
