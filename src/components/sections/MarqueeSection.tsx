import React, { useEffect, useRef, useState } from 'react';

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const sectionTop = rect.top + window.scrollY;
            const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
            setScrollOffset(offset);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Row 1 keywords (8): Python, C / C++, PyTorch, Wireshark, Arduino, Packet Tracer, Supabase, Pygame. Tripled.
  const row1Keywords = [
    'Python',
    'C / C++',
    'PyTorch',
    'Wireshark',
    'Arduino',
    'Packet Tracer',
    'Supabase',
    'Pygame',
  ];
  const row1Items = [...row1Keywords, ...row1Keywords, ...row1Keywords];

  // Row 2 keywords (10): Cybersecurity, Networks, Data, AI, LLM, Machine Learning, Embedded, IoT, DLP, OCR. Tripled.
  const row2Keywords = [
    'Cybersecurity',
    'Networks',
    'Data',
    'AI',
    'LLM',
    'Machine Learning',
    'Embedded',
    'IoT',
    'DLP',
    'OCR',
  ];
  const row2Items = [...row2Keywords, ...row2Keywords, ...row2Keywords];

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden w-full select-none"
    >
      <div className="flex flex-col gap-3 w-full">
        {/* Row 1: Moves RIGHT on scroll: translateX(offset - 200) */}
        <div className="w-full overflow-hidden">
          <div
            className="flex gap-3 transition-transform duration-75 ease-out"
            style={{
              transform: `translateX(${scrollOffset - 200}px)`,
              willChange: 'transform',
            }}
          >
            {row1Items.map((keyword, idx) => (
              <div
                key={`r1-${idx}`}
                className="w-[420px] h-[270px] flex-shrink-0 rounded-2xl flex items-center justify-center p-6 text-center select-none"
                style={{
                  background: 'linear-gradient(135deg, #16181d 0%, #0C0C0C 100%)',
                  border: '1px solid rgba(215, 226, 234, 0.12)',
                }}
              >
                <span className="hero-heading font-black uppercase text-4xl tracking-wide">
                  {keyword}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Moves LEFT on scroll: translateX(-(offset - 200)) */}
        <div className="w-full overflow-hidden">
          <div
            className="flex gap-3 transition-transform duration-75 ease-out"
            style={{
              transform: `translateX(-${scrollOffset - 200}px)`,
              willChange: 'transform',
            }}
          >
            {row2Items.map((keyword, idx) => (
              <div
                key={`r2-${idx}`}
                className="w-[420px] h-[270px] flex-shrink-0 rounded-2xl flex items-center justify-center p-6 text-center select-none"
                style={{
                  background: 'linear-gradient(135deg, #16181d 0%, #0C0C0C 100%)',
                  border: '1px solid rgba(215, 226, 234, 0.12)',
                }}
              >
                <span className="hero-heading font-black uppercase text-4xl tracking-wide">
                  {keyword}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
